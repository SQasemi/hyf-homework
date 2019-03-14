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

       // res.end(JSON.stringify(hyfStudentsBook.getStudentDetailsByName('Sheila')))
    }

}).listen(8300);
console.log('server is loading ...');