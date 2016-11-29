// question 1 - set up the variable prices to get all the prices,
// then variable sum to add all the ammounts and variable avg to divide the sum by
// number of items



var prices = items.map(item => item.price)
var sum = prices.reduce(function(a, b) { return a + b; });
var avg = sum / prices.length;



//question 2
// function between selects items with price between range
//variable match list the respective titles with their prices

function between (item){
return item.price >14 && item.price <18;
}
var match = items.filter(between).map(itemName => itemName.title)

//question 3
//includes selects items with GBP, then they are listed with other strings

items.filter(item=> item.currency_code.includes("GBP")).map(object => object.title + " costs £" + object.price)

//question 4
//includes selects items with wood and map lists them with their title

items.filter(item=> item.description.includes("wood")).map(object => object.title)

//question 5
//length equal or greater than 8 on materials, shows only the materials with more than 8, than map it with other strings


items.filter(more=> more.materials.length>=8).map(name => name.title + " has " + name.materials.length + " materials" )
