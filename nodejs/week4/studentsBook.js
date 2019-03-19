//const students = require('./students')
const fs = require('fs');
const jsonFileOfStd = fs.readFileSync('./students.json', 'utf8');
const students = JSON.parse(jsonFileOfStd);
class StudentsBook {
    

    //to show students list
    getStudentsList(){
        return (students.map((std) => {
            return std;
        }))
    }
    
}
module.exports = StudentsBook;