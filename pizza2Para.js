let orderCount = 0;
const takeOrder = (topping, size) => 
{
console.log(`Pizza with ${topping}, Size: ${size}`);
orderCount++;
console.log(`Total orders: ${orderCount}`);
}
takeOrder("pineapple", "large");
takeOrder("pepperoni", "medium");

