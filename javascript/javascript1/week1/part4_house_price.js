//part4_house_price

let width = 8 ;
let height = 10;
let dept = 10 ;
let gardenSizeInM2 = 100;
let volumeInMeters = width * height * dept;
let housePrice = volumeInMeters*2.5*1000+gardenSizeInM2*300;
console.log(housePrice);
if( housePrice<=2500000){
console.log("its a good buy for Peter");
}else
{
console.log("its not a good buy for Peter");
}
