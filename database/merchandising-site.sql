CREATE TABLE `USER`(
	ID int PRIMARY KEY ,
    `First Name` varchar(50),
    `Middle Name` varchar(50),
    `Last Name` varchar(50),
    `Prefix` varchar(50),
    `Age` int(20),
    `Gender` varchar(50),
    `Password` varchar(50),
    `contact-num` INT
	
);
CREATE TABLE `ADRESS`(
		ID int PRIMARY KEY ,
        FOREIGN KEY  (`ID`) REFERENCES USER(`ID`)	
);
SHOW databases;
USE `u991157589_appsdev2021_g2`;

SHOW tables;
SHOW COLUMNS FROM `USER`;

SELECT * FROM USER;
