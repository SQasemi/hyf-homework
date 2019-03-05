const studentsJsonList = require('./students.json', 'utf8');
const fs = require('fs');
const jsonFileOfStd = fs.readFileSync('./students.json', 'utf8');
const stdLists = JSON.parse(jsonFileOfStd);
class StudentBook{    
    
    // get list of students 
    getList(){
        return studentsJsonList.map((std) => {
           const name = std.name;
            const classId = std.classId;
           return {name, classId};
        });
        
    }
    //list students according class
    getListByClass(classID){
       const stdListByClass = studentsJsonList.filter((std) => {
        return std.classId === classID ;
       });
       return stdListByClass;
      
    }
    // list details of student according name
     getListDetailByName(name){
        const stdListByName = studentsJsonList.filter((std) => {
        return std.name === name;
        });
        return stdListByName;
    }
    //to add new student into json file
     addNewStudent(studentsInfo){
          const checkDuplicateStudent = stdLists.find((std) => {
              std.name == studentsInfo;
        
              })
              if(checkDuplicateStudent == undefined)
                stdLists.push(studentsInfo);
              fs.writeFile("students.json", JSON.stringify(stdLists, null, 4),(err) => {
                console.log(err)
            });
      return (studentsInfo) 
      
       }

    //to edit student 
      eidtStudent(toBeEdited, newValue) {
        const objIndexStd = studentsJsonList.findIndex(
          obj => obj.name === toBeEdited.name
        );
        if (objIndexStd >= 0) {
          let updateValue = { ...studentsJsonList[objIndexStd], ...newValue };
          studentsJsonList[objIndexStd] = updateValue;
          console.log(studentsJsonList[objIndexStd]);
          fs.writeFileSync("students.json",JSON.stringify(studentsJsonList, null, 4),
            err => {
              console.log(err);
            }
          );
        } else {
          console.log("Student not found in list !!!");
        }
      }
}

module.exports= StudentBook;
