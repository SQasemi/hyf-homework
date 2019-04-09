use week2_hyf_DB;

#to create student table
create table student 
	( Std_id int(10) unsigned not null auto_increment primary key,
    name varchar(100) not null,
    phone varchar (50) not null,
    email varchar (50) not null);



#to create course table
create table course
	(course_id int(10) unsigned not null auto_increment primary key,
    title varchar(50) not null,
    duration varchar(50) );
    
    
# to create third table, becuase the relation is many to many 
#to create student_course table
create table student_course2 (
Std_id int(15) unsigned not null,
course_id int(15) unsigned not null,
primary key(Std_id, course_id),
constraint fk_student_course2_student foreign key (Std_id) references student(Std_id) on delete cascade on update cascade,
constraint fk_student_course2_course foreign key (course_id) references course(course_id) on delete cascade on update cascade);


#insertion into student table 
insert into student (Std_id, name, phone, email) values (1, 'sheila', '887799', 'sh@hotmail.com');
insert into student (Std_id, name, phone, email) values (2, 'jan', '087798', 'jan@hotmail.com');
insert into student (Std_id, name, phone, email) values (3, 'haroon', '22339', 'haroon@hotmail.com');
insert into student (Std_id, name, phone, email) values (4, 'khan', '543455', 'kh@hotmail.com');
insert into student (Std_id, name, phone, email) values (5, 'smith', '997799', 's@hotmail.com');



# insertion into course table 
insert into course (course_id, title, duration) values (1,'html', 'two months');
insert into course (course_id, title, duration) values (2,'js', 'two months');
insert into course (course_id, title, duration) values (3,'db', 'one month');

#insert into student_course table
insert into student_course (Std_id, course_id) values (1, 2);
insert into student_course (Std_id, course_id) values (2, 2);
insert into student_course (Std_id, course_id) values (1,3 );
insert into student_course (Std_id, course_id) values (2, 1);
insert into student_course (Std_id, course_id) values (3, 3);
insert into student_course (Std_id, course_id) values (4, 2);


