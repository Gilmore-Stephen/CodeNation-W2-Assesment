let person = 
{
name: "Steve",
sayHi: function() 
{
return `Hello, my name is ${this.name}`;
}
}
;
console.log(person.sayHi());  
