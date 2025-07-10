// Primitive Data Types

// 1. String
let myName = "Karthik";
console.log(myName, typeof myName);

// 2. Number
let myAge = 22;
console.log(myAge, typeof myAge);

// 3. Boolean
let isStudent = true;
console.log(isStudent, typeof isStudent);

// 4. Undefined
let myAddress;
console.log(myAddress, typeof myAddress);

// 5. Null
let emptyValue = null;
console.log(emptyValue, typeof emptyValue);

// 6. Symbol
let uniqueId = Symbol("id");
console.log(uniqueId, typeof uniqueId);

// 7. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber, typeof bigNumber);

//diff between null and undefined using alert
let a;
alert(a)
let b = null;
alert(b)

// Variables
let namee = "Karthik";
let agee = 21;
let isStuu = true;
let locationn = "India";

// String concatenation to build HTML
let profileContent =
  "<h2>" + namee + "</h2>" +
  "<p>Age: " + agee + "</p>" +
  "<p>Student: " + isStuu + "</p>" +
  "<p>Location: " + locationn + "</p>";

console.log(profileContent);
document.writeln(profileContent);