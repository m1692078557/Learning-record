package com.process.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jc.common.result.Result;
import com.jc.model.process.ProcessTemplate;
import com.process.service.ProcessTemplateService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author John.Cena
 * @Description:
 */
@Api(value = "审批模板管理", tags = "审批模板管理")
@RestController
@RequestMapping(value = "/admin/process/processTemplate")
@SuppressWarnings({"unchecked", "rawtypes"})
public class ProcessTemplateController {

    @Autowired
    private ProcessTemplateService processTemplateService;

    @PreAuthorize("hasAuthority('bnt.processTemplate.list')")
    @ApiOperation(value = "获取分页列表")
    @GetMapping("{page}/{limit}")
    public Result index(
            @ApiParam(name = "page", value = "当前页码", required = true)
            @PathVariable Long page,

            @ApiParam(name = "limit", value = "每页记录数", required = true)
            @PathVariable Long limit) {
        Page<ProcessTemplate> pageParam = new Page<>(page, limit);
        IPage<ProcessTemplate> pageModel = processTemplateService.selectPage(pageParam);
        return Result.ok(pageModel);
    }

    @PreAuthorize("hasAuthority('bnt.processTemplate.list')")
    @ApiOperation(value = "获取")
    @GetMapping("get/{id}")
    public Result get(@PathVariable Long id) {
        ProcessTemplate processTemplate = processTemplateService.getById(id);
        return Result.ok(processTemplate);
    }

    @PreAuthorize("hasAuthority('bnt.processTemplate.templateSet')")
    @ApiOperation(value = "新增")
    @PostMapping("save")
    public Result save(@RequestBody ProcessTemplate processTemplate) {
        System.out.println("=====================================");
        System.out.println("进入");
        System.out.println("=====================================");
        processTemplateService.save(processTemplate);
        return Result.ok();
    }

    @PreAuthorize("hasAuthority('bnt.processTemplate.templateSet')")
    @ApiOperation(value = "修改")
    @PutMapping("update")
    public Result updateById(@RequestBody ProcessTemplate processTemplate) {
        processTemplateService.updateById(processTemplate);
        return Result.ok();
    }

    @PreAuthorize("hasAuthority('bnt.processTemplate.remove')")
    @ApiOperation(value = "删除")
    @DeleteMapping("remove/{id}")
    public Result remove(@PathVariable Long id) {
        processTemplateService.removeById(id);
        return Result.ok();
    }

    @PreAuthorize("hasAuthority('bnt.processTemplate.templateSet')")
    @ApiOperation(value = "上传流程定义")
    @PostMapping("/uploadProcessDefinition")
    public Result uploadProcessDefinition(MultipartFile file) throws FileNotFoundException, URISyntaxException {
//        String path = Paths.get(ResourceUtils.getURL("classpath:").toURI()).toString();
//        String fileName = file.getOriginalFilename();
//        // 上传目录
//        File tempFile = new File(path + "/processes/");
//        // 判断目录是否存着
//        if (!tempFile.exists()) {
//            tempFile.mkdirs();//创建目录
//        }
//        // 创建空文件用于写入文件
//        File imageFile = new File(path + "/processes/" + fileName);
//        // 保存文件流到本地
//        try {
//            file.transferTo(imageFile);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return Result.fail("上传失败");
//        }
//
//        Map<String, Object> map = new HashMap<>();
//        //根据上传地址后续部署流程定义，文件名称为流程定义的默认key
//        map.put("processDefinitionPath", "processes/" + fileName);
//        map.put("processDefinitionKey", fileName.substring(0, fileName.lastIndexOf(".")));
//        return Result.ok(map);

        String fileName = file.getOriginalFilename();
        String uploadDirectory = "/www/wwwroot/jc_oa/processes/"; // 绝对路径的上传目录

        try {
            File tempFile = new File(uploadDirectory);

            if (!tempFile.exists()) {
                tempFile.mkdirs(); // 创建目录
            }

            File imageFile = new File(uploadDirectory + File.separator + fileName);

            // 保存文件流到本地
            file.transferTo(imageFile);

            Map<String, Object> map = new HashMap<>();
            map.put("processDefinitionPath", "/www/wwwroot/jc_oa/processes/" + fileName);
            map.put("processDefinitionKey", fileName.substring(0, fileName.lastIndexOf(".")));

            return Result.ok(map);
        } catch (IOException e) {
            e.printStackTrace();
            return Result.fail("上传失败");
        }
    }

    @PreAuthorize("hasAuthority('bnt.processTemplate.publish')")
    @ApiOperation(value = "发布")
    @GetMapping("/publish/{id}")
    public Result publish(@PathVariable Long id) {
        processTemplateService.publish(id);
        return Result.ok();
    }
}
