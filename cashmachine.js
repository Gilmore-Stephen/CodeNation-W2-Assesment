var correctPin = 1234;
var balance = 1000;
function withdrawCash(enteredPin, amount) 
{
if (enteredPin === correctPin) 
{
if (balance >= amount) 
{
balance = balance - amount;  
console.log("Withdrawal successful! You withdrew $" + amount);
console.log("Your new balance is $" + balance);
} 
else 
{
console.log("Insufficient balance.");
}
} 
else 
{
 console.log("Incorrect PIN.");
}
}
withdrawCash(1234, 500); 
withdrawCash(1234, 600);  
withdrawCash(1111, 300);  


