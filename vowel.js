var str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
var lastVowelIndex = -1;
for (var i = 0; i < str.length; i++) 
{
if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') 
{
lastVowelIndex = i;
}
}
console.log("The index of the last vowel is: " + lastVowelIndex);
