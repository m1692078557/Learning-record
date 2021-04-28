# P7补

## 配置文件
语法
- properties文件
```
key=value
```
- yml文件
```yml
key: value

# 对象
student01:
  name: 李爽
  age: 20

# 行内写法
student02: {name: 张三,age: 22}

# 数组
list01:
  - dog
  - cat
  - dark

# 行内写法
list02: [dog,pig,cat]
```

在yml文件中配置值
```yml
student:
  name: 张三
  age: 18
  like: null
```
```java
package cn.com.scitc.springboot.pojo;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
// 使用ConfigurationProperties注解获取yml中的值来给当前类赋值
@ConfigurationProperties(prefix = "student")
public class Student {
    private String name;
    private String age;
    private String like;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getLike() {
        return like;
    }

    public void setLike(String like) {
        this.like = like;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age='" + age + '\'' +
                ", like='" + like + '\'' +
                '}';
    }
}
```
# P9