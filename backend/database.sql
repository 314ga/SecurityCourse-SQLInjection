CREATE DATABASE security;
USE security;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `age`int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users VALUES ("MariaF@gmail.com","pswd",25,"Maria Failli");
INSERT INTO users VALUES ("JakubP@gmail.com","pswd",25,"Jakub Piga");
INSERT INTO users VALUES ("Rando@gmail.com","pswd",25,"Random Random");

SELECT * from users