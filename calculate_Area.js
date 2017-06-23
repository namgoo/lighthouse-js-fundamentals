
function calculateRectangleArea (kength, width) {
  if (kength >= 0 && width >= 0) {
    return (kength * width);
  }
}

function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    return (base * height / 2);
  }
}

function calculateCircleArea(radius) {
  if (radius >= 0 ) {
    return Math.PI * ( radius*radius );
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined


console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(20)); // should print 38.484...
console.log(calculateCircleArea(1.5)); // should print undefined

console.log("Bob" || " Marley")
console.log("Khurram")
console.log("Khurram" > "Jeremy")
console.log("Don\nBurks")
console.log("Don\tBurks")

function areMultiples(bigNumber, smallNumber) {
  return (bigNumber % smallNumber ===0);
}

console.log(areMultiples(15, 4));

console.log("15" === 15)

var a = 3;
var b = 4;
b = a;
console.log(b);

console.log("Question 4.")

var sum = 3 + 2;

var doubleSum = function(a, b) {
  var sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);