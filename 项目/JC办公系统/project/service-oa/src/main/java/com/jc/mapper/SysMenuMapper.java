package com.jc.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jc.model.system.SysMenu;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author John.Cena
 * @date 2023/4/5 11:23
 * @Description:
 */
@Mapper
@Repository
public interface SysMenuMapper extends BaseMapper<SysMenu> {

    List<SysMenu> findListByUserId(Long userId);
}
