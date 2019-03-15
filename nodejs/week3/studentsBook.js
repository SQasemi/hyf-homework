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
    //to add new student
    addStudent(stdInfo){
        const checkDuplicate = students.find((std) => {
         (std.name === stdInfo);
        })
        if(checkDuplicate == undefined){
            students.push(stdInfo);
            fs.writeFile("students.json", JSON.stringify(students, null, 4),(err) => {
                console.log(err)
              
            });
           
        }
        return stdInfo;
    }

   //to edit student 
   eidtStudent(toBeEdited, newValue) {
    const objIndexStd = students.findIndex(
      obj => obj.name === toBeEdited.name
    );
    if (objIndexStd >= 0) {
      let updateValue = { ...students[objIndexStd], ...newValue };
      students[objIndexStd] = updateValue;
      console.log(students[objIndexStd]);
      fs.writeFileSync("students.json",JSON.stringify(students, null, 4),
        err => {
          console.log(err);
        }
      );
    } else {
      console.log("Student not found in list !!!");
    }
  }

  //to delete student
  deleteStudent(stdName){
     const deleteStdByName = students.findIndex((std) => {
        return std.name === stdName;
       })   
        students.splice(deleteStdByName, 1);
       
       
        fs.writeFileSync("students.json",JSON.stringify(students, null, 4),
        err => {
          console.log(err);
        }
      );
      console.log(students)
      return students;
   }
}
module.exports = StudentsBook;