var num = 20201; 
var numStr = num.toString();
var reverseNumStr = "";
for (var i = numStr.length - 1; i >= 0; i--) 
{
reverseNumStr += numStr[i];
}
if (numStr === reverseNumStr) 
{

console.log("The number is a palindrome");
}
else 
{
console.log("The number is not a palindrome");
}
