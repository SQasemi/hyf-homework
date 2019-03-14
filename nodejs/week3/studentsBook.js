const students = require('./students')
class StudentsBook {
    

    //to show students list
    getStudentsList(){
        return (students.map((std) => {
            return std;
        }))
    }
    //get Students list according class
    getStudentsListByClass(classId){
       const studentsListByClass = students.filter((std) => {
          return std.classId === classId;
       })
       return studentsListByClass;
    }

    //show students information according name
    getStudentDetailsByName(stdName){
        const getStdDetailsByName = students.filter((std) => {
            return (std.name === stdName)
        })
        return getStdDetailsByName;
    }
}
module.exports = StudentsBook;