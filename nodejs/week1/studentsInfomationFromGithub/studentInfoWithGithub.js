

class StudentBook {
  constructor(name, email, classId, phone) {
    this.studentsInfo = [];
    this.name = name;
    this.email = email;
    this.classId = classId;
    this.phone = phone;
  }
  //method to show list of students
  getList(){
    fetch("students.json")
    .then(response => response.json())
    .then(data => {
     console.log(data);
     this.studentsInfo =(studentsInfo.push(data)) ;
     return (studentsInfo);
    
    });
  }
  getListByClass(key,value) {
    return this.studentsInfo.filter(objStudent=>{
      if(objStudent.hasOwnProperty(key)){
        if(objStudent[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())){
          return objStudent;
        }
      }
      else{
        throw new Error(`This key ${key} does not exist`);
      }
    })
 
  }
}

let hyf_students = new StudentBook();
//console.log(hyf_students);
hyf_students.getList();

console.log(hyf_students.getListByClass("classId","08"));


