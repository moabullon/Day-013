// question 1 - set up the variable prices to get all the prices,
// then variable sum to add all the ammounts and variable avg to divide the sum by
// number of items


var prices = items.map(item => item.price)
var sum = prices.reduce(function(a, b) {
  return a + b;
});
var avg = sum / prices.length;

var node = document.createElement("p");
var textnode = document.createTextNode(`The average price is $${Math.round(avg*100)/100}`);
node.appendChild(textnode);
document.getElementById("p1").appendChild(node)


//question 2
// function between selects items with price between range
//variable match list the respective titles with their prices

var itemsPriceRange = items.filter(compare => compare.price > 14 && compare.price < 18).map(name => name.title)
itemsPriceRange.forEach(function(n) {
  var object = [n]
  var node = document.createElement("p");
  var textnode = document.createTextNode(object);
  node.appendChild(textnode);
  document.getElementById("p2").appendChild(node);
})


//question 3
//includes selects items with GBP, then they are listed with other strings

var codeGBP = items.filter(item => item.currency_code.includes("GBP")).map(object => object.title + " costs £" + object.price)
var node = document.createElement("p");
var textnode = document.createTextNode(codeGBP);
node.appendChild(textnode);
document.getElementById("p3").appendChild(node);

//question 4
//includes selects items with wood and map lists them with their title


var material = items.filter(item => item.description.includes("wood")).map(object => object.title)
material.forEach(function(n) {
  var object = [n]
  var node = document.createElement("li");
  var textnode = document.createTextNode(object);
  node.appendChild(textnode);
  document.getElementById("p4").appendChild(node);
})


//question 5
//length equal or greater than 8 on materials, shows only the materials with more than 8, than map it with other strings


let q5 = items.filter(more => more.materials.length >= 8)
let firstThing = q5[0]
let p5 = document.getElementById("p5")
document.querySelector("#p5")
q5.forEach(function(item) {

  let para = document.createElement('p')
  let title = document.createTextNode(item.title)
  para.appendChild(title)
  p5.appendChild(para)

  let para2 = document.createElement('p')
  let numberOfMaterials = document.createTextNode(`Item made of ${item.materials.length} materials:`)
  para2.appendChild(numberOfMaterials)
  p5.appendChild(para2)

  let ul = document.createElement('ul')
  item.materials.forEach(function(material) {
    let li = document.createElement('li')
    let materialText = document.createTextNode(material)
    li.appendChild(materialText)
    ul.appendChild(li)
  })
  p5.appendChild(ul)
})


//question 6
//list of items made by their sellers


var seller = items.filter(object => object.who_made.includes("i_did"))
var node = document.createElement("p");
var textnode = document.createTextNode(`${seller.length} items were made by their sellers`);
node.appendChild(textnode);
document.getElementById("p6").appendChild(node);
