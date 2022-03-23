CREATE DATABASE SCHOOL
DEFAULT CHARACTER SET='utf8mb4';

use SCHOOL;

CREATE Table Class(
    id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    begins DATE,
    ends DATE
);

CREATE Table student(
    id INT(10) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email nvarchar(255) NOT NULL ,
    phone int (10),
    class_id int(10),
    FOREIGN KEY (class_id) REFERENCES Class(id) 
);
CREATE UNIQUE INDEX index_name
ON studend (name);
INSERT INTO Class (name, begins, ends)
VALUES ("Dansk", "2021-08-03","2022-12-31");

INSERT INTO studend (name, email, phone, class_id )
VALUES ("Aryos", "Ari@gmail.com","12123","1"),
;

INSERT INTO studend (name, email, phone, class_id )
VALUES 
("Seri", "seri@apple.us","1234567","1");

INSERT INTO studend (name, email, phone, class_id )
VALUES 
("rana", "roro@sa.ma","83837","1");



--Add a new column to the class table named status which can only have the following values:
-- not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class
add status ENUM ('not_started','ongoning','finished') ;

UPDATE
Class
SET
status="2"
WHERE
id="1";
