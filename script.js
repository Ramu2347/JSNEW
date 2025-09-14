// VARIABLES AND SCOPE//
  var a=5;
  console.log(a);


  var a="hello";
  console.log(a);


  a="world";
  console.log(a);


  let b=10;
 console.log(b);


  let c=15;
  c=20;
  console.log(c);


const d="javascript"
console.log(d);







        //PRINTING STATEMENTS//


// let topic ="iam leaning javascript"
// console.log(topic)

// sub= "This is an error"
// console.error(sub)  

// sub="this is a warning"
// console.warn(sub) 

// alert("welcome")

// topic = prompt("enter you'r name")

// console.log(topic)










//note: (i got checked printing statements,
// i got good results//
console.clear()












console.clear() 


//DATA TYPES//

let h=25
console.log(typeof(h))

b="Hello"
console.log(typeof(b))  

b=true
console.log(typeof(b))  

var e;
console.log(e)
console.log(typeof(e));

const z = null
console.log(z)  
console.log(typeof(z))

console.clear() 


                           //CLASS 2//
 // Question no; 1 //
fruit = ["apple", "orange", "banana",
 "grapes", "cherry"]

// Question no; 2 //
 fruit = ["apple", "orange", "banana",
 "grapes", "cherry"]
 console.log(fruit[0])

// Question no; 3 //
 let fruit1 = ["apple", "orange", "banana",
 "grapes", "cherry"]
 console.log(fruit[fruit.length-1])

// Question no; 4 //
var fruit =["apple", "grapes", "banana", "guava"]
console.log(fruit[fruit.length - 1]);

// Question no; 5 //
let car = { 
  Bmw: "red car",
   jaguar:"black car",
  audi: "white car"
 }
 // Question no; 6 //
  console.log(car.Bmw)

  // Question no; 7 //
  console.log(car.audi)

  // Question no; 8 //
  let apple1= 10
  let apple2= 20
  let apple3= 30
  let sum = apple1 + apple2 + apple3
  console.log(sum)

  // Question no; 9 //
   console.log(apple1-apple2)

   // Question no; 10 //
console.log(apple1 ** 3);
console.log(3**2);

// Question no; 11 //
let w = 10 
 x = w++
 y = ++w
 z2 = y + x
console.log(w, x, y, z2)

//Question no; 12 //
 let num = 10; 
 num = ++num; 
 console.log(num);

 //Question no; 13 //
let num1 = 10; 
let num2 = num1++;
console.log(num2);

//Question no; 14 //
let num4 = 10;
num4 += 5;   //  num4 = num4 + 5;
console.log(num4);

//Question no; 15 //
let age1 = 20; 
age1 += 20;
console.log(age1);

//Question no; 16 //

var num10 =45
var num11 ="45"
console.log(num10 == num11)
console.log(num10 === num11)

//Question no; 17 //
 console.log(5==="5")

 //Question no; 18 //
 let car1 = "10";
let car2 = "20";
console.log(car2 > car1 && car2 >= 20);  // true
console.log(car1 > 15 && car2 > 15); // false

//Question no; 19 //
 console.log((5>=5) && !(5=="5")) 

 //Question no; 20 //
  console.log((5!="5") || !(5!=5))

console.clear()




                             // CLASS 3//
//Question no;1//         STRING CONCATENATION
let string1 = "Welcome";
let string2 = "to";
let string3 = "JavaScript";
let result = string1 + " " + string2 + " " + string3;
     console.log(result);

     //Question no;2//
     
let name = "Alice";
let results = name + " loves coding";
console.log(results);

//Question no;3//
let str1 = "JavaScript";
let str2 = "is fun!";
let combined = str1 + " " + str2;
console.log(combined);

//Question no;4//
let answer = 42;
let message = answer + " is the answer";
console.log(message);

//Question no;5//     TEMPLATE STRINGS

let num01 = 10;
let num02 = 20;
let resultall = `Sum: ${num01} + ${num02} = ${num01 + num02}`;
console.log(resultall);

//Question no;6//
let length = 10;
let width = 5;
let resultsall = `Area of rectangle: ${length * width}`;
console.log(resultsall);

//Question no;7//
let user = "Bob";
let sentence = `Hello, ${user}! Welcome back.`;
console.log(sentence);

//Question no;8//
let no1 = 15;
let no2 = 3;
let sumAll = `${no1} * ${no2} = ${no1 * no2}`;
console.log(sumAll);

//Question no;9//         TYPE CONVERSION

let gh = "5" + 10;   // "5" is a string, 10 is a number
console.log(gh);    
console.log(typeof(gh));

//Question no;10//
let m = true + ("10");
console.log(m);
console.log(typeof(m));

//Question no;11//
let str = "123";
let value = Number(str);
let resultsgh = value + 50;
console.log(resultsgh);       
console.log(typeof(resultsgh));

//Question no;12//
// Example 1: Non-empty string
let str01 = "hello";
let result1 = Boolean(str01);
console.log("Boolean('hello') =", (result1));
console.log("Type:", typeof(result1));

// Example 2: Empty string
let str02 = "";
let result2 = Boolean(str02);
console.log("Boolean('') =", (result2));   
console.log("Type:", typeof(result2));     

//Question no; 13 //        CONDITIONAL STATEMENTS
let age = 18;

if (age >= 18) {
  console.log("Adult");
}
else {
  console.log("Minor");
}

//Question no; 14 //
let num05 = 25;

if (num05 % 2 === 0) {
  console.log(num05 + " is Even");
} else {
  console.log(num05 + " is Odd");
}

//Question no; 15 //
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

//Question no; 16 //
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Wednesday":
    console.log("Midweek");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Regular day");
}

//Question no; 17 //
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Question no; 18 //
let i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}

//Question no; 19 //
let i1 = 10;

do {
  console.log(i1);
  i1++;
} while (i1 <= 15);

//Question no; 20 //
let numbers = [10, 20, 30, 40];

for (let num of numbers) {
  console.log(num * 2);
}

//Question no;21//
let person = {
  name: "John",
  age: 25,
  city: "New York"
};

for (let key in person) {
  console.log(person[key]);
}

let keys = Object.keys(person);
console.log(keys);

console.clear();

              //CLASS 4  FUNCTIONS

  //Question no;1//
function sayHi() {
  console.log("Hi everyone!");
}

// Call the function
sayHi();

  //Question no;2//
  var addnumbers = function(a,b)
  {
    console.log(a+b);
  }
  addnumbers(1,2);

  //Question no;3//
  let doubleNum = ()=> num * 2;
   num = 5;
   console.log(doubleNum(5))

  //Question no;4//
    function welcome(name)    {
      console.log(`Welcome, ${name}!`);
    } welcome("Mike");
    //Question no;5//
    function greetWithAge(name, age) {
  console.log(`${name} is ${age} years old`);
}
greetWithAge("Anil", 20);
greetWithAge("Priya", 25);

//Question no;6//
function checkVar() {
  if (true) {
    var message = "Hello";
  }
  console.log(message);
}
checkVar();

       //Question no;7//
// function checklet() {
//   if (true) {
//     let messageb = "Hello";
//   }
//   console.log(messageb);
// }

// checklet();

//Question no;8//
printMessage();

function printMessage() {
  printMessage = "javascript is fun!";
  console.log(printMessage);
}

//Question no;9//
function doMath(callback, num1, num2) {
  const result = callback(num1, num2);
  console.log("Result:", result);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

doMath(add, 5, 3);   
doMath(multiply, 5, 3); 

//Question no;10//
// Higher-order function
function calculate(callback, num1, num2) 
{
  const result = callback(num1, num2);
  console.log("Result:", result);
}

function subtractNumbers(a, b) {
  return a - b;
}
calculate(subtractNumbers, 10, 4);


 console.clear();



//       class 5 Functions and Data Structures

//Question no;1//
function curring(a){
  return function(b){
    return function(c){
  console.log(a+b+c)
  }
}
} curring(40)(50)(8);

//Question no;2//
(function() {
  console.log("I run immediately!");
})();

//Question no;3//
function* genFun() {
  yield 14;
  yield 45;
  yield 32;
}

let gen = genFun();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//Question no;4//
// function add3(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// console.log(add3(2)(3));
 
//function addUncurried(a, b) {
 // return a + b;
//}

//console.log(addUncurried(2, 3));

//Question no;5//
let fruits = ["apple", , "mango"];
fruits[1] = "banana";
console.log(fruits); // ["apple", "banana", "mango"]

console.log(fruits[1])

//Question no;6//

let fruitstype = {
  homogeneous: ["apple", "banana", "mango", "orange"],
  heterogeneous: ["apple", 10, true, { name: "mango", color: "yellow" }]
};

console.log("Homogeneous:", fruitstype.homogeneous);
console.log("Heterogeneous:", fruitstype.heterogeneous);

//Question no;7//
let userProfile = {
  name: "Alice",
  age: 25,
  levelOfLanguage: {
    english: "advanced",
    spanish: "intermediate",
    french: "beginner"
  }
};

console.log(userProfile.levelOfLanguage.english);   // "advanced"
console.log(userProfile.levelOfLanguage["spanish"]); // "intermediate"

//Question no;8//
let obj11 = { name: "Alice", age: 25, city: "Paris" };

for (let key in obj11) {
  console.log(key, ":", obj11[key]);
}
for (let [key, value] of Object.entries(obj11)) {
  console.log(key, ":", value);
}
//Question no;9//
function* genFun() {
  yield "apple";
  yield "banana";
  yield "mango";
}
let storeGen = genFun();
console.log(storeGen.next()); // { value: "apple", done: false }
console.log(storeGen.next()); // { value: "banana", done: false }
console.log(storeGen.next()); // { value: "mango", done: false }
console.log(storeGen.next()); // after all values

//Question no;10//
let userProfiles = {
  name: "Alice",
  completeTraining: function() {
    return this.name + " has completed training!";
  }
};
console.log(userProfiles.completeTraining());

console.clear();

            // CLASS 6 MATH AND DATE METHODS

//Question no;1//
let realvalue = -450;
console.log(Math.abs(realvalue));

//Question no;2//
 let number1 = -72.5;
 console.log(Math.abs(number1));

//Question no;3//
let sign1 = -1234;
console.log(Math.sign(sign1));

//Question no;4//
var q = 0;
console.log(Math.sign(q));

//Question no;5//
let Sqrtof = 625;
console.log(Math.sqrt(Sqrtof));

//Question no;6//
let Sqrtof2 = 50;
console.log(Math.sqrt(Sqrtof2).toFixed(2));

//Question no;7//
const cbrtof = 27;
console.log(Math.cbrt(cbrtof));

//Question no;8//
const cbrtof2 = -64;
console.log(Math.cbrt(cbrtof2));

//Question no;9//
let powof =  Math.pow(4, 5);
console.log (powof);

//Question no;10//
console.log (Math.pow(7, 2));

//Question no;11//
let arr = [45, 12, 89, 3, 67];
console.log (Math.min(...arr));

//Question no;12//
console.log(Math.max(...arr));

//Question no;13//
let rannum = Math.random()*50;
console.log (rannum);

//Question no;14//
let randint = Math.random()*10;
console.log(Math.floor(randint));

//Question no;15//
let val = 6.789;
console.log(val.toFixed(2));

//Question no;16//
 let nom = 3.14159;
  console.log(Math.ceil(nom));

//Question no;17//
let nom1 = 8.76;
console.log(Math.floor(nom1));

//Question no;18//
console.log(Math.round(4.49));

//Question no;19//
let nom3 = 9.999;
console.log(Math.trunc(nom3));

//Question no;20//
let currentDate = new Date();
console.log(currentDate.getFullYear());

//Question no;21//
let date1 = new Date();
let datee = date1.getDate();
let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
let monthAbbr = months[date1.getMonth()];
let year = date1.getFullYear();
let formattedDate = `${datee}/${monthAbbr}/${year}`;
console.log(formattedDate);


