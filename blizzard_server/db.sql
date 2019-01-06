#vue_app_server/db.sql
#设置客户端连接使用的编码
SET NAMES UTF8;
#丢弃数据库blizzcon，如果存在
DROP DATABASE IF EXISTS blizzcon;
#创建数据库，存储的编码
CREATE DATABASE blizzcon CHARSET=UTF8;
#进入该数据库
USE blizzcon;
#创建数据表
CREATE TABLE bz_login(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  uid VARCHAR(25) COMMENT '邮箱' NOT NULL DEFAULT '',
  uname VARCHAR(25) COMMENT '用户名' NOT NULL DEFAULT '',
  upwd VARCHAR(32) COMMENT '密码' NOT NULL DEFAULT '',
  idcard VARCHAR(18) COMMENT '身份证' NOT NULL DEFAULT '',
  phone VARCHAR(18) COMMENT '手机' NOT NULL DEFAULT ''
);

INSERT INTO bz_login VALUES(null,'2@qq.com','dd',md5(123),441481199211060599,13000000000);
INSERT INTO bz_login VALUES(null,'1@qq.com','tom',md5(123),441481199211060599,13000000000);
INSERT INTO bz_login VALUES(null,'3@qq.com','jerry',md5(123),441481199211060599,13000000000);




#技巧1:库名;表名;列表;全英文小写字母
CREATE TABLE xz_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  ctime DATETIME,
  point INT,
  img_url VARCHAR(255),
  content VARCHAR(255) 
);
INSERT INTO xz_news VALUES(1,'123',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(2,'124',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(3,'1233',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(4,'124',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(5,'125',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(6,'126',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(7,'127',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(8,'128',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(9,'129',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(11,'1231',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(12,'1232',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(13,'1233',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(14,'1234',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(15,'1235',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(16,'1236',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(17,'1237',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(18,'1238',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(19,'1239',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(21,'12322',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(22,'12322',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");

#货币 小数计算误差
#价格 购物车合计 
#double DECIMAL(10,2)
#严格   将货币转换分单位  1.99 -> 199
#显示  1.99
#3:添加20条记录
#4:查询

#1:创建评论表 39
#   表名 几列 列名
#   xz_comment
#   id        INT        评论编号
#   nid       INT        评论所属新闻编号
#   user_name VARCHAR(25)评论人名称
#   ctime     DATETIME   时间
#   content   VARCHAR(120)内容

USE xz;
DROP TABLE IF EXISTS xz_comment;
CREATE TABLE xz_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  user_name VARCHAR(25),
  ctime DATETIME,
  content VARCHAR(120)
);
#2:添加15条
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'111');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'112');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'113');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'114');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'115');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'116');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'117');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'118');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'119');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1110');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1111');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1112');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1113');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1114');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1115');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1116');

CREATE TABLE xz_login(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO xz_login VALUES(null,'dd',md5(123));
INSERT INTO xz_login VALUES(null,'tom',md5(123));
INSERT INTO xz_login VALUES(null,'jerry',md5(123));