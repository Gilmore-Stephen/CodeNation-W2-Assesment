for (var i = 0; i < 6; i++) 
{
var randomNumber = Math.floor(Math.random() * 30) + 1;
if (randomNumber % 7 === 0) 
{
console.log(randomNumber + " is divisible by 7");
}
else
{
console.log(randomNumber + " is not divisible by 7");
}
}
