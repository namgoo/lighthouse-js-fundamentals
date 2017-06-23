var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While Loop \n")
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i])
  i++
}
console.log("\n")
// Write a for loop that prints out the contents of ingredients:
console.log("For Loop \n")
for (var i =0; i < ingredients.length; i++ ) {
  console.log(ingredients[i])
}
console.log("\n")
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Any Loop\n")
var i = (ingredients.length - 1) ;
while (i > -1) {
  console.log(ingredients[i]);
  i = i - 1
}
console.log("\n")