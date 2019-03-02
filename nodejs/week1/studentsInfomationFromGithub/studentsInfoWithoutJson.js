class StudentBook{
    constructor( studentInfo, name, email, classId, phone){
        this.studentsList = [];
        this.studentInfo = studentInfo;
        this.name = name;
        this.email = email;
        this.classId = classId;
        this.phone = phone;

    }
    //method to add studetn info
    addStudentToList(studentInfo){
     const addToList = this.studentsList.filter(std => {
         return  (std.name=== studentInfo.name && std.email === studentInfo.email && std.classId === studentInfo.classId);
        
     });
    if(addToList){
     this.studentsList.push(studentInfo);
    }
  
    }

    //method to list all studetns
    getList(){
      let showListOfStudet = ( this. studentsList.map((std) => {
        const name = std.name;
        const classId = std.classId;
        return {name , classId };
       }));
      return(showListOfStudet);
    }

    //method to get list of studetns according their class
    getListByClass(classId){
      let listByClass = this.studentsList.filter((std) => {
        return std.classId = classId;
    }); 
   
    return (listByClass)
    }
  showInformationOfStudent (name){
     let getListInformation = this.studentsList.filter((std) => {
      return  std.name = name;
     })
     return getListInformation;
  }
  

}



//here we create an instance of class
const studentBook = new StudentBook();
//console.log(studentBook);
studentBook.addStudentToList({name: "sheila", email:"sh@hotmail.com", classId:"08", phone:"998877"});
studentBook.addStudentToList({name: "jan", email:"jan@hotmail.com", classId:"78", phone:"990877"});
studentBook.addStudentToList({name: "khan", email:"kh@hotmail.com", classId:"08", phone:"198877"});
studentBook.addStudentToList({name: "ali", email:"ali@hotmail.com", classId:"07", phone:"098877"});
studentBook.addStudentToList({name: "mona", email:"mona@hotmail.com", classId:"08", phone:"698877"});
studentBook.addStudentToList({name: "fana", email:"fan@hotmail.com", classId:"09", phone:"298877"});
//console.log(studentBook);

//get all list
studentBook.getList();
console.log(studentBook );
//get list by class
console.log(studentBook.getListByClass("08"));

console.log(studentBook.showInformationOfStudent("jan"));

//to edit it





























// class StudentBook {
//     constructor(studentsInfo) {
//       this.studentsInfo = studentsInfo;
//       this.name = name;
//       this.email = email;
//       this.classId = classId;
//       this.phone = phone;
//     }
 
//     getList(){
//        return this.studentsInfo.map((std) => {
//         this.name = std.name;
//         this.email = std.email;
//         this.classId = std.classId;
//         this.phone = std.phone;
//             return {name, email, classId, phone};
//             });
           
//     }
   
// }

// // // const studentBook = new StudentBook({name:"jan",email:"jan@hotmail.com", classId:"08", phone: "998877"},
// // // {name:"jan",email:"jan@hotmail.com", classId:"08", phone: "998877"},{name:"jan",email:"jan@hotmail.com", classId:"08", phone: "998877"},{name:"jan",email:"jan@hotmail.com", classId:"08", phone: "998877"},
                        
// // // );

// // let jsonBody ={
// //     birthday : 1997,
// //     firstname: 'foo',
// //     lastname:'bar'
// // }
// // //fetch('students.json')
// // class Student{
// //     constructor(){

// //     }

// //     getFullname(){
// //         return this.lastname+' '+this.firstname
// //     }
// //     getApproxAge(){
// //         return 2018- this.birthday
// //     }
// //     fromJson(json){
// //         this.studentId = json.studentId;
// //         this.birthday = json.birthday;
// //         this.firstname = json.firstname;
// //         this.lastname = json.lastname;
// //     }
// //     applyData(json) {
// //         Object.assign(this, json);
// //       }
     
// // }

// // let student = new Student()
// // student.fromJson(jsonBody)
// // console.log(student.getFullname())
// // console.log(student.getApproxAge())



// //  student = new Student;
// //  student.applyData({ name: "whatever" });

// // // const student = new Student({ name: "whatever" });


// // var s = '[{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"},{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}]';

// // var obj = JSON.parse(s);

// // for(let i = 0; i<s.length ; i++){

// //  console.log( obj[i])   
// // }

// // document.getElementById("user").innerHTML =
// // "Name: " + obj.first_name + " " + obj.last_name + "<br>" +
// // "Location: " + obj.location;