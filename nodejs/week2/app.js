const http = require('http');
const StudentBook = require('./studentsList')

 server = http.createServer((req, res) => {
    const url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    const hyfStudents = new StudentBook();


    if(url == '/getList'){
        res.end(JSON.stringify(hyfStudents.getList()));
    }
    else if( url == '/getListByClass'){
        res.end(JSON.stringify(hyfStudents.getListByClass('08')))
    }
    else if(url == '/getStudentDetailsByName'){
        res.end(JSON.stringify(hyfStudents.getListDetailByName('Sheila')));
    }
    else if(url == '/addNewStudent'){
        res.end(JSON.stringify(hyfStudents.addNewStudent('Sheila')));
    }
   
}).listen(8000);
console.log("server is loading");
//console.log(studentBook);

