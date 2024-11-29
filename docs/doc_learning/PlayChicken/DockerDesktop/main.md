# Docker Desktop 
---
## 2024/11/26
- 虽然早几天前就下载了DockerDesktop 但是一直没机会使用，不过现在倒是有机会用了，
拉取了几个镜像(images) - MySql, Nginx, Redis. 然后用这几个镜像创建了容器(containers)
很好理解 镜像是容器的模板，容器是镜像的示例。
配置Mysql 镜像的时候，遇到一个错误就是需要配置系统变量：默认密码。
不然在创建镜像时会报错。
然后嘛就是数据持久化需要挂载(Volumes)卷。
然后配置Nginx也是遇到了需要默认配置文件，这倒是通过挂载主机目录并映射到docker内部目录实现的。
Redis倒是没有去配置，短时间内应该用不上。
```bash
>> docker run -d --name nginx `
>>   -v D:/coding/classdesign/nginx/config:/etc/nginx `
>>   -v D:/coding/classdesign/nginx/html:/var/www/html `
>>   -v D:/coding/classdesign/nginx/logs:/var/log/nginx `
>>   -p 80:80 nginx
```
以上是创建nginx的命令，把一些常见配置以及主要目录挂载到主机，然后配置了端口映射。
