let pet = 
{
name: "Woof",
typeOfPet: "dog",
age: 5,
colour: "brown",
eat: function() 
{
return `${this.name} is eating`;
},
drink: function() 
{
return `${this.name} is drinking`
}
}
console.log(pet.eat());    // Output: Buddy is eating
console.log(pet.drink());  // Output: Buddy is drinking
