var bobsFollowers = ["Alice", "Steve", "Ben", "Mark"];
var hannahsFollowers = ["Alice", "Sam", "Frank", "Cricket"];
for (var i = 0; i < bobsFollowers.length; i++) 
{
for (var j = 0; j < hannahsFollowers.length; j++) 
{
if (bobsFollowers[i] == hannahsFollowers[j]) 
{ 
console.log(bobsFollowers[i] + " is a mutual follower");
}
}
}
