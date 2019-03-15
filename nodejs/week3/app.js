const http = require('http');
const body_parser = require("body-parser");
const StudentsBook = require('./studentsBook');

const server = http.createServer((req, res) => {
    const url = req.url;
    const hyfStudentsBook = new StudentsBook;

    if(url == '/'){
      console.log("welcome to studentsBook...")
       res.end();
    }
    //to show students list
    else if(url == '/getStudentsList' && req.method == 'GET'){
        const getStdList = hyfStudentsBook.getStudentsList();
        if(getStdList){
            res.statusCode = 200;
            res.end(JSON.stringify(getStdList));
        }
        else{
            res.statusCode = 404;
            res.end("not found!!");
        }
    }
   //get Students list according class
    else if(url == '/getStudentsListByClass' && req.method === 'GET'){
        const getStdByClassName = hyfStudentsBook.getStudentsListByClass('08');
        if(getStdByClassName){
            res.statusCode= 200;
            res.end("list of students from class"+ JSON.stringify(getStdByClassName));
        }
        else{
            res.statusCode = 404;
            res.end("not found!!");
        }
    }
     //show students information according name
    else if(url == '/getStudentDetailsByName' && req.method == 'GET'){
        const getStdDetailsByName = hyfStudentsBook.getStudentDetailsByName('Sheila');
        if(getStdDetailsByName){
            res.statusCode = 200 ;
            res.end(JSON.stringify(getStdDetailsByName));
        }
    }

    //to add new student
    else if(url == '/addNewStudent' && req.method == 'POST'){
        const addNewStd = hyfStudentsBook.addStudent({
            "name": "jam", "classId":"09", "email":"h@hotmail.com", "phone":"886655"
        });
        if (addNewStd) {
            res.statusCode = 201;
            res.end ("Student added successfully")

        } else {
            res.statusCode = 404;
            res.end('Failed')
        }}

    //to edit student
    else if (url == '/editStudent' && req.method == 'PUT'){
        const editStd = hyfStudentsBook.eidtStudent({"name":"jam"},{"name":"Ali", "classId":"07"});
        if (editStd) {
            res.statusCode = 201;
            res.end ("Student edited successfully")

        } else {
            res.statusCode = 404;
            res.end('Failed')
        }
    }

    //to delete student
    else if( url == '/deleteStudent' && req.method == 'DELETE'){
        const deleteStd = hyfStudentsBook.deleteStudent('Hafiz');
        if (deleteStd) {
            res.statusCode = 201;
            res.end ("Student deleted successfully")

        } else {
            res.statusCode = 404;
            res.end('Failed')
        }
    }

}).listen(8300);
console.log('server is loading ...');