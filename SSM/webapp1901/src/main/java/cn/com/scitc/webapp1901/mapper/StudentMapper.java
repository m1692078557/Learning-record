package cn.com.scitc.webapp1901.mapper;

import cn.com.scitc.webapp1901.model.Student;
import java.util.List;

public interface StudentMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table student
     *
     * @mbg.generated Wed Apr 21 16:26:08 CST 2021
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table student
     *
     * @mbg.generated Wed Apr 21 16:26:08 CST 2021
     */
    int insert(Student record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table student
     *
     * @mbg.generated Wed Apr 21 16:26:08 CST 2021
     */
    Student selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table student
     *
     * @mbg.generated Wed Apr 21 16:26:08 CST 2021
     */
    List<Student> selectAll();

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table student
     *
     * @mbg.generated Wed Apr 21 16:26:08 CST 2021
     */
    int updateByPrimaryKey(Student record);
}