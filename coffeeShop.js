let coffeeShop = 
{
branch: "Downtown",
drinks: 
{ 
Latte: 3, 
Tea: 3.5, 
Juice: 2.5 
},
food: 
{ 
sandwich: 5, 
cake: 4, 
muffin: 2 
},
drinksOrdered: function(order) 
{
let total = 0;
let orderDetails = "You ordered: ";
for (let drink of order) 
{
if (this.drinks[drink]) 
{
total += this.drinks[drink];
orderDetails += `${drink} (£${this.drinks[drink]}), `;
}
}
orderDetails += `Total cost: £${total.toFixed(2)}`;
return orderDetails;
},
foodOrdered: function(order) 
{
let total = 0;
let orderDetails = "You ordered: ";
for (let item of order) 
{
if (this.food[item]) 
{
total += this.food[item];
orderDetails += `${item} (£${this.food[item]}), `;
}
}
orderDetails += `Total cost: £${total.toFixed(2)}`;
return orderDetails;
}
}

console.log(coffeeShop.drinksOrdered(["Tea", "Juice"]));  
console.log(coffeeShop.foodOrdered(["sandwich", "cake"]));     
