let pizzatopping = "pepperoni";
let notthis = "tuna";

switch (pizzatopping) 
{
case "cheese":
case "Jalapeno":
console.log("These are important ingredients for my pizza.");
break;

case "pepperoni": 
console.log(`I don’t mind having ${pizzatopping} on my pizza.`);
break;

case "pineapple": 
console.log(`I don’t mind having ${pizzatopping} on my pizza.`);
break;

case "tuna": 
console.log(`${notthis} should not be on my pizza.`);
break;

default:
console.log(`${notthis} should not be on my pizza.`);
}

