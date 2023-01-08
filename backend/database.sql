CREATE DATABASE security;
USE security;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users VALUES ("usr","usr");
INSERT INTO users VALUES ("admin","admin");
INSERT INTO users VALUES ("noob","noob");