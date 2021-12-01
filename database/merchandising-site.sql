CREATE TABLE user_account(id INT(20) PRIMARY KEY AUTO_INCREMENT,
 FirstName VARCHAR(50),
 MiddleName VARCHAR(50),
 LastName VARCHAR(50), 
 Prefix VARCHAR(50),
 Gender VARCHAR(50),
 ContactNnum BIGINT, 
 Gmail VARCHAR(50) NOT NULL UNIQUE, 
 Password_ VARCHAR(20));

CREATE TABLE address(id INT(20) PRIMARY KEY AUTO_INCREMENT, 
 UnitFloor VARCHAR(20), 
 HouseBldg VARCHAR(20),
 streetNum VARCHAR(20), 
 streetName VARCHAR(20),
 BrgyDistrict VARCHAR(20),
 zipcode INT(20),
 userID INT, 
 FOREIGN KEY (userID) REFERENCES user_account(id) );



INSERT INTO user_account (FirstName, MiddleName, LastName,prefix, Gender,ContactNnum,Gmail, password_)
 VALUES ("Adam", "Compio", "Marcaida", "Jr.", "Male", 09120090952, 'adamcompiomarcaida2@gmail.com', '12345');



SELECT id FROM user_account WHERE Gmail ='adamcompiomarcaida@gmail.com';

INSERT INTO address (UnitFloor, HouseBldg, StreetNum,streetName,BrgyDistrict, zipcode, userID)
                                        VALUES ('lot 30','blk 30', 'villa elise','Masuso', 'Pandi', 3014, 1);
                                        


SHOW TABLES;
SHOW COLUMNS FROM user_account;
SHOW COLUMNS FROM address;

SELECT * FROM user_account;
SELECT * FROM address;


DROP TABLE address;
DROP TABLE user_account;
DROP TABLE Addres;