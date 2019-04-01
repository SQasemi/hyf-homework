use hyf_08DB;
select * from status;
describe user;
select * from user;
describe task;
select count(id) 
from task;
select count(title) 
from task;
select * from task;
select count(id) 
from task
where due_date is null;
select * from task
 join status on task.status_id = status.id 
 and status.name like "Done%";
select * from status 
inner join task on status.id = task.status_id;

select * from task 
join status on task.status_id = status.id 
and status.name not like "Done%";
select * from task
order by created desc;
select min(created) from task;
select * from task;
select title, due_date from task
where title like "%database%" or description like "%database%";
select task.title, status.name from task
join status on status.id = task.status_id;
select name from status where 
(select count(*) from task join status
on status.id = task.status_id);