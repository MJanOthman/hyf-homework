/*1*/
SELECT
SUM(1)
FROM
task;

/*2*/
SELECT
SUM(1)
FROM
task
WHERE
due_date IS NULL;


/*3*/
SELECT  * 
FROM
 task 
 JOIN status ON status.id= task.status_id
 WHERE
 status.name="Done";

 /*4*/
SELECT  * 
FROM
 task 
 JOIN status ON status.id= task.status_id
 WHERE
 status.name!="Done";

 /*5*/
SELECT *
FROM
task
ORDER BY
updated DESC;

 /*6*/
SELECT 
*
FROM
task
ORDER BY
updated DESC
LIMIT 1;

 /*7*/
SELECT
title,due_date
FROM
task
WHERE
title LIKE "%database%" OR
description LIKE "%database%";


/*8*/
SELECT
    task.title as task_title, status.name as status_as_text
FROM
task
 JOIN status ON status.id= task.status_id;



/*9*/
SELECT
    status.name as status_name, COUNT(title)
FROM
 task
 JOIN status ON status.id= task.status_id
 GROUP BY
 status_name;


/*10*/
SELECT
    status.name as status_name, COUNT(title)
FROM
 task
 JOIN status ON status.id= task.status_id
 GROUP BY
 status_name
ORDER BY
COUNT(title) DESC ;