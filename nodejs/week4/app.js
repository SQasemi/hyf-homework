
const StudentsBook = require('./studentsBook');
const express = require('express');
const app = express();
const hyfStudentsBook = new StudentsBook;
    app.get('/', (req, res) => {
        res.send("wellcome to HYF Student project");
    })

    app.get('/students', (req, res) => {
        res.end(JSON.stringify(hyfStudentsBook.getStudentsList()));
    })

app.listen(7000);
console.log('server is loading ...');