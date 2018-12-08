//to calculate age of dog

let dogYearOfBirth = 2017 ; 
let dogYearFuture = 2027 ;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears)
{
    console.log("your dog will be " + (dogYear*7) + " years old of dogs old in " + dogYearFuture);
}
 else 
{
     console.log("your dog will be " + dogYear + " human years old in " + dogYearFuture);
}