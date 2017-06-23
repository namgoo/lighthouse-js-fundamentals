var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!")
console.log('\n')

console.log("While Loop - Basic")
var repeat = 0
while (repeat < 10) {
  console.log(repeat);
  repeat++;
}

console.log('\n')
console.log("While Loop: Change Key after 5")

var chorus = "Let's dance"
var repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("Change Key");
  }
  console.log(chorus)
  repeat=repeat+1;
}
console.log("Until the sun comes up!");





console.log('\n')
console.log("For Loop")


var repeat = 0
for (var repeat =0; repeat < 10; repeat = repeat +1) {
  console.log(repeat)
}
