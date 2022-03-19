/* Here I made a small data base structure simulated like 
the Netto warehouse where I work.
It is where the workers pick boxes and collect them to send them to 
Netto markets all over Juttland*/

CREATE DATABASE Netto
DEFAULT CHARACTER SET='utf8mb4';

use Netto;

CREATE Table warehouse_sections(
    id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    products VARCHAR(50) NOT NULL,
    work_start_clock TIME,
    work_end_clock TIME,
    manager_name VARCHAR(50) NOT NULL ,
    number_of_Employees INT(10)
);

CREATE Table employees(
    id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email nvarchar(255) NOT NULL ,
    phone int (10),
    section_id int(10),
    FOREIGN KEY (section_id) REFERENCES warehouse_sections(id),
    start_Date DATE,
    job_rank VARCHAR(50)
);

CREATE Table picking(
employee_id int(10) NOT NULL,
FOREIGN KEY (employee_id) REFERENCES employees(id),
section_id int(10) NOT NULL,
FOREIGN KEY (section_id) REFERENCES warehouse_sections(id),
date DATE,
nr_picked_boxes int(10)
);


/* now as long as we are finished with creating the tables, lets add some data into them */


INSERT INTO warehouse_sections (name, products, work_start_clock, work_end_clock, manager_name, number_of_Employees)
VALUES
("køl","cheese and yogurt and lanchun meat", "07:00","15:00","Bar Sar","25" ),
("kød","meat and chicken","08:00","16:00","Dar Mar","20"),
("grønt","fruits and vegetables","07:30","15:30","Tar Yar","28");

INSERT INTO employees (name, email, phone, section_id, start_Date, job_rank)
VALUES
("Jan Othmasn","jan@gmail.com", "11111","1","2022-01-10","vikar" ),
("Jojo Haded","jojo@gmail.com","22222","3","2020-03-21","hired"),
("Nana Sasa","nanatinoAlpatcino@TheGodfather.com","333333","2","2014-07-28","formand");


INSERT INTO picking (employee_id, section_id, date, nr_picked_boxes )
VALUES
("2","3","2022-03-19","1300"),
("1","1","2022-03-19","1300"),
("1","1","2022-03-19","1300"),
("3","2","2022-03-19","1300"),
("2","1","2022-03-19","1300"),
("2","3","2022-03-19","1300");

