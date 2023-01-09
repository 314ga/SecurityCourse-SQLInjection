CREATE DATABASE security;
USE security;
DROP TABLE IF EXISTS `notes`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `email` char(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `age`int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  CONSTRAINT PK_users PRIMARY KEY (email)
);

INSERT INTO users VALUES ("MariaF@gmail.com","pswd",25,"Maria Failli");
INSERT INTO users VALUES ("JakubP@gmail.com","pswd",25,"Jakub Piga");
INSERT INTO users VALUES ("Rando@gmail.com","pswd",25,"Random Random");

DROP TABLE IF EXISTS `notes`;
CREATE TABLE notes (
noteID int PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(10) NOT NULL,
content VARCHAR(200) NOT NULL,
email CHAR(50),
CONSTRAINT FK_users FOREIGN KEY (email) REFERENCES users(email)
);
INSERT INTO `notes`(`title`, `content`, `email`) VALUES ('groceries', 'milk, fish, eggs', 'MariaF@gmail.com')
SELECT * from users
testMaria
test@gmail.com
1234