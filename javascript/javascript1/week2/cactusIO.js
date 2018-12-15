
//adding activity 
let activities = [];
function addActivity(date, activity, duration){
 activitie = [{
  date: date,
  activity: activity,
  duration: duration
}];
 
 return activities.push(activitie);
}
 addActivity("23-dec-2018","youtube",21);
 addActivity("24-dec-2018","google",6);
 console.log(activities);


 //show my status
 function showStatus(){
     for (let i = 0; i< activities.length; i++)
     console.log("");
 }