//require("hyfBayHelpers.js");
//document.write('<script src="hyfBayHelpers.js" type="text/javascript"></script>');
console.log('Script loaded');

let getAvailablePro = getAvailableProducts();
console.log(getAvailablePro)
// let productList = productNames.map((list) => {
//  return list;
// })
// console.log(productList)
//let productes = document.getElementById('productes');
const productNames = ['Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Milk', 'Chalk', 'Fish fingers', 'Socks', 'Chocolate', 'Toothbrush', 'Computer', 'Nokia', 'Cologne'];
// let productes = '<ul>'

// productNames.forEach((list) => {
//  productes += '<li>' + list +'</li>';
// });
// productes += '</ul>'
// document.getElementsByClassName('products').innerHTML = productes;


productNames.forEach((item) => {
let li = document.createElement('li');
let text = document.createTextNode(item);
li.appendChild(text);
document.getElementById("pro").appendChild(li);

})