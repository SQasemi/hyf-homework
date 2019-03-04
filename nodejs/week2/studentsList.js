const studentsJsonList = require('./students.json', 'utf8');
const fs = require('fs');
const stdLists = JSON.parse(fs.readFileSync('./students.json', 'utf8'));
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
     addNewStudent(studentInfo){
         const checkDuplicate = stdLists.find((std) => {
           return  std.name == studentInfo.name;
         })
       if(checkDuplicate === undefined ){
        stdLists.push(studentInfo);
       }
      
       
     }

    // eidtStudent(editStd = name){

    // }
}

module.exports= StudentBook;
