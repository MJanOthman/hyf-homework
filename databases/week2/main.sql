use db2Exercise;


--Part 1: Working with tasks
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES
("Make Maqluuba meal","making an eastern food with rice and meat", "2022-03-15", "2022-03-15", "2022-03-15","2" );

UPDATE
task
SET
title="do HYF homework"
WHERE
id="36";

UPDATE
task
SET
due_date="2022-03-21 21:22:23"
WHERE
id="36";

UPDATE
task
SET
status_id="1"
WHERE
id="36";

UPDATE
task
SET
status_id="3"
WHERE
id="36";

DELETE
FROM
task
WHERE
id=37;


--Part 3: More queries

--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
*
FROM
task JOIN user_task on task.id=user_task.task_id 
JOIN user on user.id=user_task.user_id
WHERE
user.email LIKE "%@spotify.com%";

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
*
FROM
task JOIN user_task on task.id=user_task.task_id 
JOIN user on user.id=user_task.user_id
WHERE
user.name="Donald Duck" and status_id=1;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
*
FROM
task JOIN user_task on task.id=user_task.task_id 
JOIN user on user.id=user_task.user_id
WHERE
user.name="Maryrose Meadows" and created LIKE "%-09-%";

--Find how many tasks where created in each month
SELECT
MONTH(created) as month_of_creation,
COUNT(title) as number_of_tasks
FROM
task
GROUP BY
MONTH(created);
