// fetch("students.json")
// 	.then(response => response.json())
// 	.then(parsed => {
//     console.log(parsed)
//   });





class StudentBook {
    constructor(name, email, classId, phone)
    {
        this.name = name;
        this.email = email;
        this.classId = classId;
        this.phone = phone;

    }
    //method to show list of students
    getList(){
        fetch('students.json')
        .then(response => response.json())
        .then((data) => {
            this.data = data;
            console.log(data);

        })
       
    }

}

 
  const hyf_students = new StudentBook();
  //console.log(hyf_students);
  hyf_students.getList();


   
   





// //const studentsInfo = '{"students":}'
// async function loadJSON (url) {
//     const res = await fetch(url);
//     return await res.json();
//    }
   
//    loadJSON('students.json').then(data => {
//     console.log(data);
//    });