const StudentsBook = require('./studentsBook');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;
const hyfStudentsBook = new StudentsBook;

// get an instance of router
const router = express.Router();
app.use(bodyParser.json());
// route middleware that will happen on every request
router.use(function(req, res, next) {
	// log each request to the console
	console.log(req.method, req.url);
	// continue doing what we were doing and go to the route
	next();	
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
	res.send('Wellcome to HYF students app!!');	
});
// route middleware to validate :name
router.param('name', function(req, res, next, name) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('doing name validations on ' + name);

	// once validation is done save the new item in the req
	req.name = name;
	// go to the next thing
	next();	
});
// apply the routes to our application
app.use('/', router);

// login routes
app.route('/students/api')
    //to show students list
	.get(function(req, res) {
		if(req.query.name)
		{	
			const getStudentByName = hyfStudentsBook.getStudentDetailsByName(req.query.name);
			if(getStudentByName.length > 0){
				res.statusCode = 200;
				res.send(getStudentByName);
			}	
			else
			{
				res.statusCode = 404;
          	    res.send('Oops not found!!');
			}
		}
		else if(req.query.classId)
		{
			const getStdudentssByClass = hyfStudentsBook.getStudentsListByClass(req.query.classId);
			if(getStdudentssByClass.length > 0 ){
				res.statusCode = 200;
				res.send(getStdudentssByClass);
			}
			else
			{
				res.statusCode = 404;
          	    res.send('Oops not found!!');
			}
		}
		
		else
		{
			res.send(hyfStudentsBook.getStudentsList());
		}
	})

	//to add new student into list
	.post(function(req, res) {
		const addNewStudent = hyfStudentsBook.addStudent(req.body);
		if(addNewStudent){
			res.statusCode = 200;
			res.send("student added!!!");	 
		}
		else
		{
			res.statusCode = 404;
            res.send('Failed!!');
		}

	})
	//to edit student
	.put(function(req, res){
		if(req.body){
			const editStdByName = hyfStudentsBook.edittStudent(req.body);
			if(editStdByName){
				res.send(editStdByName);
			}
		}
	})

	//to delete student
	.delete(function(req, res){
		if(req.body){
			res.send(hyfStudentsBook.deleteStudent(req.body));
		}
	})
// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);


















































// var express 		= require('express');
// var cors 				= require("cors");
// var bodyParser 	= require("body-parser");
// var app 				= express();

// var students = [
//     {
//         "name": "Sheila",
//         "email": "shia@mail.com",
//         "classId": "08",
//         "phone": "234266"
//     },
//     {
//         "name": "Natalia",
//         "email": "natalia@mail.com",
//         "classId": "08",
//         "phone": "934566"
//     },
//     {
//         "name": "Keerthika",
//         "email": "ka@mail.com",
//         "classId": "08",
//         "phone": "034566"
//     }//term,defined
// ];

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function (req, res, next) {
// 	console.log(`${req.method} request for '${req.url} - ${JSON.stringify(req.body)}'`);
// 	next();
// });

// app.use(express.static('./public'));
// app.use(cors());

// app.get('/students/api', function (req, res) {
// 	res.json(students);
// });

// app.post('/students/api', function (req, res) {
// 	students.push(req.body);
// 	res.json(students);
// });

// app.delete('/students/api/:name', function (req, res) {
// 	students = students.filter(function (stdName) {
// 		return stdName.name.toLowerCase() !== req.params.name.toLowerCase();
// 	});
// 	res.json(students);
// });

// app.listen(3000);

// console.log('Express app running at http://localhost:3000');

// module.exports = app;





