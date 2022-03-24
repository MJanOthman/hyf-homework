CREATE DATABASE mealSharing
DEFAULT CHARACTER SET='utf8mb4';

use mealSharing;

CREATE Table meal(
    id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description TEXT(1000) NOT NULL,
    location VARCHAR(100) NOT NULL,
    delivering_time DATETIME NOT NULL,
    max_reservations INT(10) NOT NULL ,
    price DECIMAL(10) NOT NULL,
    created_date DATE
);

CREATE Table reservation(
    id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    number_of_guests int(10) NOT NULL,
    created_date DATE ,
     meal_id int(10),
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    contact_phone VARCHAR (10) NOT NULL,
    contact_name VARCHAR (50) NOT NULL,
    contact_email VARCHAR (10) NOT NULL
);

CREATE Table review(
id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
title VARCHAR(50) NOT NULL,
description TEXT(1000) NOT NULL,
meal_id int(10) NOT NULL,
FOREIGN KEY (meal_id) REFERENCES meal(id),
stars INT NOT NULL,
created_date DATE 
);

INSERT INTO meal (title, description, location, delivering_time, max_reservations, price,created_date)
VALUES
("Maqluba","rice with chickenbrystfilet and potato", "Aarhus","2022-03-25 15:00:00 ","20","89.99","2022-03-22" ),
("Mlokhiya","rice with chickenbrystfilet and Mlokhyia", "Horsens"," 2022-03-25 15:00:00","25","79.99","2022-03-22" ),
("Kebab","Grilled Hakked meat", "Skanadborg"," 2022-03-25 15:00:00","28","129.99","2022-03-23" );

INSERT INTO reservation (number_of_guests, created_date, meal_id, contact_phone, contact_name,contact_email)
VALUES
("6","2022-03-28", "2","11223344 ","Jano","joj@gmail"),
("9","2022-03-26", "3","1478464 ","Martin","mr@gmail"),
("5","2022-03-30", "1","1098754 ","Mikle","mk@gmail");

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
("Super luxus","very good meal", "3","4.8 ","2022-03-26"),
("not good","I prefer lamb meat maqluba", "1","1","2022-03-26"),
("perfect","I loved this mlokhiya", "2","4.5 ","2022-03-26");


--and now, time to make queries

--Meal
--Get all meals
SELECT 
* 
FROM
meal;

--Add a new meal
INSERT INTO meal (title, description, location, delivering_time, max_reservations, price,created_date)
VALUES
("Salmon with potato","grilled salmon with potato in oven", "Skejby","2022-03-25 15:00:00 ","15","139.99","2022-03-22" );

--Get a meal with any id, fx 1
SELECT 
* 
FROM
meal
WHERE
id=3;

/*Update a meal with any id, fx 1. 
Update any attribute fx the title or multiple attributes*/
UPDATE
meal
SET
max_reservations="40"
WHERE
id=3;

--Delete a meal with any id, fx 1
DELETE
FROM
meal
WHERE
id=4;

--Reservation

--Get all reservations
SELECT 
* 
FROM
reservation;

--Add a new reservation
INSERT INTO reservation (number_of_guests, created_date, meal_id, contact_phone, contact_name,contact_email)
VALUES
("11","2022-01-28", "2","11876 ","Sami","sam@gmail");

--Get a reservation with any id, fx 1
SELECT 
* 
FROM
reservation
WHERE
id=3;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
reservation
SET
contact_phone="7712131415",
contact_name="Rasmos"
WHERE
id=2;

--Delete a reservation with any id, fx 1
DELETE
FROM
reservation
WHERE
id=4;

--Review
--Get all reviews
SELECT 
* 
FROM
review;

--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
("good"," good meal", "2","4","2022-03-26");

--Get a review with any id, fx 1
SELECT 
* 
FROM
review
WHERE
id=3;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
review
SET
title="good",
description="healthy meal",
stars=3
WHERE
id=1;

--Delete a review with any id, fx 1
DELETE
FROM
reservation
WHERE
id=4;


--Additional queries
--Get meals that has a price smaller than a specific price fx 90
SELECT
*
FROM
meal
WHERE
price<100;

--Get meals that still has available reservations
SELECT
*
FROM
meal JOIN reservation ON
meal.id=reservation.meal_id
WHERE
reservation.created_date >"2022-03-24";

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
*
FROM
meal
WHERE
title LIKE "%potato%";

--Get meals that has been created between two dates

SELECT * FROM meal
WHERE created_date BETWEEN "2022-03-20" AND "2022-03-22";

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal 
LIMIT 2;

--Get the meals that have good reviews
--I tried to use Group BY to avoid repeat meal that has more than one good review, but it kept giving an error
SELECT
*
FROM meal 
 JOIN review 
ON meal.id=review.meal_id
WHERE review.stars >=3;

--Get reservations for a specific meal sorted by created_date

SELECT * FROM reservation
WHERE meal_id=2
ORDER BY created_date;

--Sort all meals by average number of stars in the reviews
 SELECT AVG(stars) as stars_avg, meal_id ,meal.title  FROM review JOIN meal 
 ON meal.id=review.meal_id
 GROUP BY meal_id
 ORDER BY stars_avg;

