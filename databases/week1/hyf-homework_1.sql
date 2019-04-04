#Homeworks
use hyf_08DB;
select * from status;
describe user;
select * from user;
describe task;
select count(id) 
from task;

#1:Find out how many tasks are in the task table
select count(title) 
from task;
select * from task;

#2:Find out how many tasks in the task table do not have a valid due date
select count(id) 
from task
where due_date is null;

#3:Find all the tasks that are marked as done
select * from task
 join status on task.status_id = status.id 
 and status.name like "Done%";
 
 
select * from status 
inner join task on status.id = task.status_id;

#4:Find all the tasks that are not marked as done
select * from task 
join status on task.status_id = status.id 
and status.name not like "Done%";

#5:Get all the tasks, sorted with the most recently created first
select * from task
order by created desc;

#6:Get the single most recently created task
select min(created) from task;
select * from task;

#7:Get the title and due date of all tasks where the title or description contains database
select title, due_date from task
where title like "%database%" or description like "%database%";

#8:Get the title and status (as text) of all tasks
select task.title, status.name as text from task
join status on status.id = task.status_id;

#9:Get the name of each status, along with a count of how many tasks have that status
select name from status where 
(select count(*) from task join status
on status.id = task.status_id);
 
 #10. Get the names of all statuses, sorted by the status with most tasks first
select status.name as statusList
from status join task on status.id = task.status_id
group by status.id
order by statusList desc ;
