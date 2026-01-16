import { Children } from "react";

// {
//         id: "",
//         section: "JavaScript",
//         page: "controller",
//         heading: "",
//         text: "",
//         children: ``,
//         path: "/code/javascript/controllers",
//       },

export const docsData = {
  javascript: {
    basics: [
      {
        id: "js-basics-intro",
        section: "JavaScript",
        page: "Basics",
        heading: "Intro",
        text: "",
        children: `
          // create node repo
view -> command palette -> search container -> node 

"use strict" // treat all JS code as newer version

ecma script && mdn //website
documentation of js create by ecma 

*************************
javascript execution context

> global execution context // create a code into global variable of code put into "this"
> funtion execution context
> Eval execution context

memory creation phase //  in this only memory allocation is done
execution phase // in this phase all operations is done  by javascript


1) global execution => this

2) memory phase 
> put all variable and set value = undefined
> funtions = defination (funtion inside code) 

3)execution phase
> not it will put variable value in there variable
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-string-intro",
        section: "JavaScript",
        page: "Basics",
        heading: "js strings",
        text: "strings",
        children: `
          const newString = "   harsh"
console.log(newString);
console.log(newString.trim()); // trim is use for removing spaces
console.log(newString.slice(-1,4)); // for slicing strings
console.log(newString.substring(1,4)); // for slicing strings not give a negative number 
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-variables",
        section: "JavaScript",
        page: "Basics",
        heading: "variables",
        text: "js variables",
        children: `
          const accountId = 123456
let accountEmail = "harsh@gmail.com"
var accPass = "123456"
accCity = "rajkot"
let accState;
// accountId = 654321  // not allowed
accountEmail = "abc@gmail.com"
accPass = "654321"
accCity = "porbander"

console.log(accountId);
console.table([accountId,accountEmail,accPass,accCity,accState]) // print all values in table formate 
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-data-types",
        section: "JavaScript",
        page: "Basics",
        heading: "data types",
        text: "data types",
        children: `
          "use strict" // treat all JS code as newer version

//alert () // can't use in node // use but in different way

console.log(3+3); console.log(3-3); // ; is use when multiple statement is write in one line 

/*
numbers -> 2 to 53
bigint
string
boolean = true / false
null // stand alone value // is object
undefined // vale that not defined 
symbol // use for unique

object
*/
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-datatypes-summary",
        section: "JavaScript",
        page: "Basics",
        heading: "data types summary",
        text: "summary",
        children: `
          // primitive 
// primitivee data is give a copy of a data not a refrence of memory location 

// String , Number , Boolean , null , undefined , Symbol , BigInt 


// non primitive / reference 

// array , Object , functions

// **************************************************

//stack (primitive), heap (non primitive)

// stack 

let myCar  = "M4"
let myCarModel = myCar
console.log(myCar);

myCarModel = "M5"
console.log(myCarModel);

// heap 

let userOne = {
    name: "harsh",
    age: 21
}
let userTwo = userOne

userTwo.age = 22

// console.log(userOne);
// console.log(userTwo);

let myArr1 = ["harsh", 22]
let myArr2 = myArr1

myArr2 = ["harsh", 21]

console.log(myArr1);
console.log(myArr2);  // array is non primitive but work like stack primitive type give aa copy to another variable

        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-conversation-operater",
        section: "JavaScript",
        page: "Basics",
        heading: "conversation operater",
        text: "operaters for js",
        children: `
          let score = "17"

// console.log(typeof score)

let valueInNumber = Number(score) // converting data types (for number = Number, string = String, boolean = Boolean)

// console.log(typeof(valueInNumber))

/* 
"33" = 33
"33ab" = convert but value is NaN
"abc" = NaN
boolean = true -> 1,false ->0
NaN type is number
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/* 
1 => true 
0 => false
string => true 
blank => false
*/

// ---------------------------------------------
// operations

let str1 = "hello"
let str2 = " harsh"
// console.log(str1 + str2)

/*
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 ** 2); //power
console.log(1 / 2);
console.log(1 % 2);
*/

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-comparision",
        section: "JavaScript",
        page: "Basics",
        heading: "comparision ",
        text: "comarition operaters",
        children: `
          /*
console.log(2 > 2);
console.log(2 >= 2);
console.log(2 <= 2);
console.log(2 < 2);
console.log(2 == 2);
console.log(2 != 2);
*/

console.log("2" > 1);
console.log("hello" > 1);
console.log(2 > "1");
console.log(null > 0);
console.log(null < 0);
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-math",
        section: "JavaScript",
        page: "Basics",
        heading: "math() method",
        text: "math()",
        children: `
          // const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // for float value limit
// console.log(balance.toPrecision(3)); // return nummber as a string , limit is 1-21

// const number = 1000000000
// console.log(number.toLocaleString('en-IN')); // add comas "," in number //prameter is represent which contry type comma whant to include

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,7,8));
console.log(Math.max(4,6,7,8));

console.log(Math.random());  // give random number between 0 and 1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);  

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 10) 

// other
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

// const myObject = Object.create(null)
const chai = {
    name: "cold chai",
    price: 250,
    isAvailable: true,

    orderchai(){
        console.log("this is wrongg way ");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{ // use when other will access over object but we want that anybudy cant change of do anything in my code
    writable: false, 
    enumerable: false
}) // or this is like static function other cant change value but in this other cant loop of do aynthing with this method
// use when other wants to use over databse or api
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) { // name property cant go in loop
    if (typeof value  !== 'function') {
        
        console.log(\`\${key} , \${value}\`);
    }
    
}
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-date",
        section: "JavaScript",
        page: "Basics",
        heading: "javascript dates",
        text: "date()",
        children: `
          let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// let myDate1 = new Date(2004,7,16)
// let myDate1 = new Date(2004,7,16,5,3)
let myDate1 = new Date("2004-08-16")
// console.log(myDate1.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",

})
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-arrays",
        section: "JavaScript",
        page: "Basics",
        heading: "js arrays",
        text: "arrays",
        children: `
          const myarr = [0,1,2,3,4,5]
const mycar = new Array(1,"BMW",8,"oddi")
// myarr.push(6) // add value not index
// console.log(myarr);
// myarr.pop() // delete last value not particuler value
// console.log(myarr);

// console.log(myarr.includes(3));
// console.log(myarr.indexOf(3));


// const myarr2 = myarr.join()
// console.log(myarr);
// console.log(myarr2);
// console.log(typeof myarr2); // join() copy one arr in another but in string formate 

// slice or splice  ********

// console.log("a ",myarr);
// const myarr3 = myarr.slice(1,3) // return aa index value that give in array, not remove from array
// console.log("b ",myarr3);
// const myarr4 = myarr.splice(1,3) // return aa index value but also re3move from array 
// console.log("c ",myarr4);
// console.log("d ",myarr);

// array concatination ***********************

// myarr.push(mycar) // add array into array not values of second array
// console.log(myarr);

// const mergeArr = myarr.concat(mycar)  // when use concat() nedd to store in new variable
// console.log(mergeArr); // combine two array and return new

// const mergeArr2 = [...myarr,...mycar] // same as concat
// console.log(mergeArr2);

// const arr4 = [5,6,[1,2,3],9,[5,5,[4,6]]]
// const arr5 = arr4.flat(Infinity) //flat is use to combine array into array
// console.log(arr5);

let mytName = "Pankhaniya Harsh"
console.log(Array.from("harsh")); // from() convert anything in array
console.log(Array.from(mytName)); 

const score1 = 100
const score2 = 200
console.log(Array.of(score1,score2));  //of() is combine multiple variable value in array

        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-objects",
        section: "JavaScript",
        page: "Basics",
        heading: "js objects",
        text: "js object",
        children: `
          // singleton
// Object.create

// object literals

const mysym = Symbol("key1")  // creating symbol

const myobj = {
    name: "harsh",
    'fullName': "pankhaniya harsh", // another way to create keys ,output is same
    [mysym] : "mykey1", // right way to use symbol
    age: 22,
    location: "rajkot",
    email: "harsh@gmail",
    isLoggedIn: false,
    lastLoggedIn: ["mon","tus"]
}
// ways to acces object values
// console.log(myobj.fullName);
// console.log(myobj["name"]);
// console.log(myobj[mysym]); // for acces symbol

Object.freeze(myobj) // use to freeze object so value cant change 
console.log(myobj);
        `,
        path: "/code/javascript/basics",
      },
      {
        id: "js-objecct-2",
        section: "JavaScript",
        page: "Basics",
        heading: "objects 2",
        text: "second part of object",
        children: `
          // const myObj = {} // object literals

const myObj = new Object() //singleton object 

myObj.Id = "123abc"
myObj.name = "harsh"
myObj.isLoggedIn = false

// console.log(myObj);

const regularUser = {
    email: "harsh@gmail.com",
    Fullname: {
        userName: {
            firstName: "harsh",
            lastName: "pankhaniya"
        }
    }
}

// console.log(regularUser.Fullname.userName.firstName);

//concet objects ******************

// const obj3 = {myObj, regularUser} // not work proprerly
// const obj3 = Object.assign({},myObj,regularUser) //{}, copy other object in {}
// const obj3 = {...myObj,...regularUser} // spred operater
// console.log(obj3);

// array object ***************
const users = [
    {
        name: "harsh",
        age: 21
    },
    {
        name: "harsh",
        age: 21
    },
    {
        name: "harsh",
        age: 21
    }
]
// console.log(users[1].name)

// console.log(Object.keys(myObj)); // return keys and values in arrays
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));

// console.log(myObj.hasOwnProperty('isLoggedIn')); // ASKING THIS PROPERTY IS THERE OR NOT


// destructing ***********************
// use to destruct any key value and use 
const myCar = {
    name: "BMW",
    price: "50,000",
    colour: "black"
}
const {colour} = myCar  // destructing declear methods
const {colour: clr} = myCar // give another name to value "clr"
console.log(colour);
console.log(clr);
console.log(myCar);

        `,
        path: "/code/javascript/basics",
      },
    ],
    functions: [
      {
        id: "js-functions-intro",
        section: "JavaScript",
        page: "functions",
        heading: "js function",
        text: "basic info of functions (remopve '\' for use the code)",
        children: String.raw`
          // function myFun(num1 , num2){
//     console.log(num1 + num2)
// }

// const mera = myFun(5,6) // direct print console of funtion dont wait for variable print

// function cart(...num1){ // using spread operator we can accept argument infinite
//     return num1
// }
// console.log(cart(100,200,300)); // but value come in arrays formate

//********************************************** 
const user = {
    username: "harsh",
    price: 200
}

function myCart(anyObject){
    console.log(\`userrname is \${anyObject.username} and price is \${anyObject.price}\`);
    
}
// myCart(user)
// myCart({  // direct add aa object
//     username: "pankhaniya",
//     price: 200
// })

const myArr = [100 , 200 , 400]

function myArrayFunction(num1){
    return num1[1]
}
console.log(myArrayFunction(myArr));
console.log(myArrayFunction([500,600,700]));//passing array in arrgument
        `,
        path: "/code/javascript/functions",
      },
      {
        id: "js-arrow-functions-intro",
        section: "JavaScript",
        page: "functions",
        heading: "arrow functions",
        text: "()=>{}",
        children: String.raw`
const user = {
  userName: "harsh",
  price: 200,

  welcomeMessage: function(){
    console.log(\`\${this.userName} welcome to website\`);
    console.log(this);
  }
}

// user.welcomeMessage();
// user.userName = "pankhaniya"
// user.welcomeMessage();

// console.log(this);

// function arrow(){
//   let username = "harsh"
//   console.log(this.username);
// }
// arrow()

// const chai = () => {
//   let username = "harsh"
//   console.log(this.username);
// }
// chai()

const chai = (num1, num2) => num1 + num2
console.log(chai(2,3))
        `,
        path: "/code/javascript/functions",
      },
      {
        id: "js-IIFE",
        section: "JavaScript",
        page: "functions",
        heading: "IIFE (immediately invoked funtions expression)",
        text: "IIFE functions runs immediatly when program runs",
        children: String.raw`
          //immediately invoked funtions expression (IIFE)

(function harsh (){
    // named IIFE
    console.log(\`databse connected\`);
    
})(); //use for gobal variable polutions problem 
// use ";"if we want to create another IIFE funtion
( () => {
   // simple IIFE or arrow IIFE 
    console.log(\`db connectedv 2\`);
    
} )();
// with argument 
( (name) => {
    console.log(\`db connectedv 2 \${name}\`);
    
} )("harsh")
        `,
        path: "/code/javascript/functions",
      },
    ],
    controllStatement: [
      {
        id: "js-controllers-intro",
        section: "JavaScript",
        page: "controller",
        heading: "if else",
        text: "if else statements",
        children: `
          // < , > , <= , >= , != , == , === , !==

// const isLoggedIn = true
// let a = 5
// if (isLoggedIn === true) {
//     // const b = 6
//     console.log(++a);
    
// }
// // console.log(b);
// console.log(a);

// const balance = 1000

// if (balance > 500) console.log("good balance");

// if (balance > 500) console.log("good balance"), 
// console.log("very good balance");
//*************************************** */
// if (balance < 500) {
//     console.log("yesh is less than 500");
    
// }else if (balance < 750){
//     console.log("yesh is less than 7500");
    
// }
//  else {
//     console.log("its 1000");
    
// }

//******************************** */
const userLogged = true
const debitCard = true
const loggedInGoogle = false
const LoggedEmail = true

// && all true needed , || any one true is alowed ,  ?? nullish coalescing operator 

if (userLogged && debitCard && 2==2) {
    console.log("yesh u can ");
    
}
if (loggedInGoogle || LoggedEmail) {
    console.log("you can logged");
    
}
        `,
        path: "/code/javascript/controllers",
      },
      {
        id: "js-switch-case",
        section: "JavaScript",
        page: "controller",
        heading: "switch case",
        text: "switch case statements",
        children: `
          const month = 3
// const month = "3" //if use sting than case can also string

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");        
        break;
    case 4:
        console.log("april");        
        break;

    default: // if forget to give break than all case prit but defualt is not print
        console.log("default raise");
        
        break;
}
        `,
        path: "/code/javascript/controllers",
      },
      {
        id: "js-truthy",
        section: "JavaScript",
        page: "controller",
        heading: "truthy | truthly values",
        text: "values that true or false",
        children: `
          // const userEmail = "harsh@gmail.com"
const userEmail = []

// if (userEmail) {
//     console.log("yesh you have maill");
    
// }else{
//     console.log("you don't have maill");
    
// }

/*falsy values 
false , 0 , -0 , BigInt 0n , "", null , undefined , NaN*/

/* truthy values
true , 
"0" inside zero is true,
 "false",
 " " empty string with space,
 [],
 {},
 funtion(){},
 false == 0,
 false == "",
 0 == ""
  */


//  if (userEmail.length === 0) {
//     console.log("aray is empty");
        
//  }

const emptyObject = {}

if (Object.keys(emptyObject.length === 0)) { // keys() give all keys in aray so we can check by length
    console.log("objecrt is empty");
    
}

// ?? nullish coalescing operator  : null  and undefined
// use iin database 
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 

console.log(val1);


/// terniary operater 

// condition ? true : false

const price = 100
price <= 80 ? console.log("terniary operater") : console.log("terniary operater 2");
        `,
        path: "/code/javascript/controllers",
      },
    ],
    loops: [
      {
        id: "js-while-loop",
        section: "JavaScript",
        page: "Loops",
        heading: "while loop",
        text: "",
        children: String.raw`// let i = 20
// while (i <= 20) {
//     console.log(i);
//     break
// }

// let myArr = ["harsh","pankhaniya"]
// let arr = 0
// while (arr < myArr.length) {
//     console.log(\`value is \${myArr[arr]}\`);
//     arr = arr +1
    
// }

let score = 1
do {
    console.log(score);
    score++
    
} while (score <= 10);`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-for-each",
        section: "JavaScript",
        page: "Loops",
        heading: "for each loop",
        text: "",
        children: `const arr = ["harsh",1,2,3,4]

// arr.forEach( function (params) {
//     console.log(params);
    
// } )

// arr.forEach( (params) => {
//     console.log(params);
    
// } )
//****************************** */
function printMe(params){
    console.log(params);
    
}

// arr.forEach(printMe) // just give funtions reference not nedd to write ()

//************************************ */
// arr.forEach( (items,index,array) => {
//     console.log(items,index,array);
    
// })

const myArr = [
    {
        language: "javascript",
        name: "harsh"
    },
    {
        language: "python",
        name: "vivek"
    },
    {
        language: "java",
        name: "viraj"
    },
]

myArr.forEach( (items) => {
    console.log(items.language); // use to iterate array object 
    
} )`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-for-each-2",
        section: "JavaScript",
        page: "Loops",
        heading: "more in for each",
        text: "",
        children: `// const arr = ["harsh",1,2,3,4]

// const myArr = arr.forEach( (item) => { // for each not not return any value
//     // console.log(item);

//     return item
    
// } )
// console.log(myArr);

const myNum = [1,2,3,4,5]

// const newNum = myNum.filter( (num) => num > 4)  //filter () returns aa value
// const newNum = myNum.filter( (num) => {
//    return num > 4
// })  // if use  {} bractes than need to write return  

//************************************
//  */
// const newNum = [] 

// myNum.forEach( (num) => { // enter new value from mynum to newNum
//     if (num > 4) {
//         newNum.push(num)
//     }
// } )
// console.log(newNum);

//************************************** */

const books = [
    {
        title: "book one",
        genre: "fiction"
    },
    {
        title: "book two",
        genre: "harsh"
    },
    {
        title: "book three",
        genre: "vivek"
    },
]
// const userBooks = books.filter( (bk) => bk.genre == "harsh" )
const userBooks = books.filter( (bk) => {
    return bk.genre == "harsh" && bk.title == "book two"
} )

console.log(userBooks);`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-for-in",
        section: "JavaScript",
        page: "Loops",
        heading: "for in",
        text: "",
        children: `const arr = ["harsh",1,2,3,4]

// arr.forEach( function (params) {
//     console.log(params);
    
// } )

// arr.forEach( (params) => {
//     console.log(params);
    
// } )
//****************************** */
function printMe(params){
    console.log(params);
    
}

// arr.forEach(printMe) // just give funtions reference not nedd to write ()

//************************************ */
// arr.forEach( (items,index,array) => {
//     console.log(items,index,array);
    
// })

const myArr = [
    {
        language: "javascript",
        name: "harsh"
    },
    {
        language: "python",
        name: "vivek"
    },
    {
        language: "java",
        name: "viraj"
    },
]

myArr.forEach( (items) => {
    console.log(items.language); // use to iterate array object 
    
} )`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-for-loop",
        section: "JavaScript",
        page: "Loops",
        heading: "for loop",
        text: "",
        children: String.raw`// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i);
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("this is  5");        
//     }
//     console.log(i);
// }

for (let i = 0; i < 10; i++) {
    // console.log(\`outer is \${i}\`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(\`inner \${i} and \${j}\`);
        // console.log(i + "*" + j +  '=' + i*j);
        
    }
    
}

let array =  ["harsh","pankhaniya","hello"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);    
}

//`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-for-of",
        section: "JavaScript",
        page: "Loops",
        heading: "for of",
        text: "",
        children: `// const arr = {
//         name: "harsh",
//         age: 21
// }
// for (const i of Object.keys(arr)) {
        //     console.log(i);
        
// }


// const arr = [1,2,3,4,"harsh"]

// for (const i of arr) {
//     console.log(i);
    
// }

// let name = "harsh pankhaniya"
// for (const i of name) {
//     if (i == " ") { //remove space
//         continue
//     }
//     console.log(i);
    
// }

// maps ****************

const newMap = new Map() // map keys all ways require brakets ""
newMap.set("name","harsh")
newMap.set("age",21)

// console.log(newMap);

for (const [keys, value] of newMap) { // for printing map give keys and value both 
    // console.log(keys,value); // not work in object 
    
}`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-more-in-loops",
        section: "JavaScript",
        page: "Loops",
        heading: "more in loops",
        text: "",
        children: `const myNum = [1,2,3,4,5]

// const add = myNum.map( (num) => num + 10 )

// chaining
const add = myNum.map( (num) => num *10 ).map( (num) => num + 1 ).filter( (num) => num >= 30)
console.log(add);`,
        path: "/code/javascript/loops",
      },
      {
        id: "js-reduce",
        section: "JavaScript",
        page: "Loops",
        heading: "reduce method",
        text: "",
        children: `const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce(function (acc, curent){ // acc = accumulator
//     console.log(acc);
    
//     return acc + curent
// },0)
// const myTotal = myNum.reduce( (acc, curent) => { // with arrow funtion
//     console.log(acc);
    
//     return acc + curent
// },0)
// console.log(myTotal);

const cart = [
    {
        name: "harsh",
        price: 500
    },
    {
        name: "vivek",
        price: 500
    },
    {
        name: "viraj",
        price: 500
    },
]

const cartTotal = cart.reduce( (acc,item) => acc + item.price , 0)
console.log(cartTotal);`,
        path: "/code/javascript/loops",
      },
    ],
    dom : [
      {
        id: "js-dom-intro",
        section: "JavaScript",
        page: "Dom",
        heading: "Dom intro",
        text: "",
        children: `console.dir(document)
console.log(window)
console.log(document.links[2]) //example

document.getElementById('title')
document.getElementById('title').id
document.getElementById('title').className
document.getElementById('title').getAttribute
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class',"test") // overwrite the present values 
const title =document.getElementById('title')
title
title.style.backgroundColor = 'green'
title.style.padding = "15px"
title.style.borderRadius = "15px"

title.innerText //  show text that showing in screen
title.textContent // show all test text that hideen by css or anything and showing text of screen
title.innerHTML // show texts inner tags everythings

//*************************

single element : use foreach(), 
HTMLCollection : cant use any loop , use [] for fetch
node list : use foreach() ,

document.getElementById() //single element
document.getElementsByClassName() //HTMLCollection
document.querySelector() // single element
document.querySelectorAll  // node List // select any thing . class , # id , tag name , 
document.getElementByTagName()  //HTMLCollection.

convert HTMLCollection and nodeList into array 
Array.from(elements)
let array2 = [...elements];

document.form
document.links
document.script
document.images
`,
        path: "/code/javascript/dom",
      },
      {
        id: "js-dom-one",
        section: "JavaScript",
        page: "Dom",
        heading: "Dom 1",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM</title>
    
</head>
<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <div class="day">monday</div>
        <div class="day">tuseday</div>
        <div class="day">wednesday</div>
        <div class="day">friday</div>
    </div>
    <script>
        const parent = document.querySelector(".parent")
        // console.log(parent)
        // console.log(parent.children)
        // console.log(parent.children[1].innerHTML)

        // for (let i = 0; i < parent.children.length; i++) {
        //     console.log(parent.children[i].innerHTML);
            
        // }
        parent.children[1].style.color = "red"
        // console.log(parent.firstElementChild)
        // console.log(parent.lastElementChild)

        const myDay = document.querySelector(".day")
        // console.log(myDay)
        // console.log(myDay.parentElement);
        // console.log(myDay.parentNode);
        console.log(myDay.nextElementSibling);
        console.log("nodes : ",parent.childNodes);
        
    </script>
</body>
</html>`,
        path: "/code/javascript/dom",
      },
      {
        id: "js-dom-two",
        section: "JavaScript",
        page: "Dom",
        heading: "Dom 2",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM chai or Code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    
</body>
<script>
    const myDiv =document.createElement('div')
    console.log(myDiv);
    myDiv.className = "main"
    myDiv.id = "myId"
    myDiv.id = Math.round(Math.random() * 10 + 1)
    myDiv.setAttribute("title","my title")
    myDiv.style.backgroundColor = "red"
    myDiv.style.padding = "10px"
    // myDiv.innerHTML = "harsh"
    const myCreate = document.createTextNode("hello harsh harsh")
    myDiv.appendChild(myCreate)
    document.body.appendChild(myDiv)
    
</script>
</html>`,
        path: "/code/javascript/dom",
      },
      {
        id: "js-dom-three",
        section: "JavaScript",
        page: "Dom",
        heading: "Dom 3",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff">
    <ul class="language">
        <li>javaScript</li>
    </ul>
</body>
<script>
    function add(name) {
        const myLi = document.createElement('li')
        myLi.innerHTML = \`\${name}\`
        // myLi.innerHTML = \`<p>\${name}</p>\` // html pass as real , and not optimized
        document.querySelector(".language").appendChild(myLi)
    }
    add("pyton")
    add("java")

    function addopti(name){
        const li2 = document.createElement('li')
        li2.appendChild(document.createTextNode(name))
        // li2.appendChild(document.createTextNode(\`<p>\${name}</p>\`)) // html tag pass as a text // and optimized
        document.querySelector('.language').appendChild(li2)
    }
    addopti("rubi")
    
    // edit 

    const editing = document.querySelector('li:nth-child(2)')
    // editing.innerText = "harsh"
    const newLi = document.createElement('li')
    newLi.textContent = "harsh"
    editing.replaceWith(newLi)

    const editing2 = document.querySelector('li:first-child')
    editing2.outerHTML = '<li>typeScript</li>'

    // remove
    const editing3 = document.querySelector('li:last-child')
    editing3.remove()
</script>
</html>`,
        path: "/code/javascript/dom",
      },
    ],
    events: [
      {
        id: "js-events-one",
        section: "JavaScript",
        page: "Dom",
        heading: "events one",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>
</head>

<body style="background-color: #212121; color: #fff;">
    <h2>images</h2>
    <div>
        <ul id="images">
            <li><img width="200px" id="headphones"
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="headphones"></li>
            <li><img width="200px" id="apple"
                    src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="apple"></li>
            <li><img width="200px" id="tv"
                    src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D"
                    alt="tv"></li>
            <li><img width="200px" id="banana"
                    src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D"
                    alt="banana"></li>
            <li><img width="200px" id="bulb"
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D"
                    alt="bulb"></li>
            <li><a style="color: aliceblue;" href="https://www.google.com/" id="google">Google Baba</a></li>
        </ul>
    </div>
</body>
<script>
    document.getElementById('headphones').onclick = function(){
        alert("headpphones")
    }

    //attachEvent()
    // j query
    document.getElementById('headphones').addEventListener('click',function(){
        alert("headpphones")
    },false) // false is defualt but imp for interviwe

    document.getElementById('headphones').addEventListener('click',function(e){
        console.log(e);
    },false)
    // type, timestamp, defaultPreventd
    // target , toElemnt , srcElement , currentTarget
    // clientX,clientY,screenX,screenY
    // altkey,ctrlKey , shiftkey,keycode

    // event propogetion
    // flase go to event to top and true go top to event
    document.getElementById('images').addEventListener('click',function(){
        console.log('clicked inside images ul');
    },false)
    document.getElementById('headphones').addEventListener('click',function(e){
        console.log('headphone clicked');
        e.stopPropagation() // work with false
    },false)
    document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault()
        e.stopPropagation()
    },false)

    document.getElementById('images').addEventListener('click', function (e) {
        console.log(e.target.tagName)
        if (e.target.tagName === 'IMG') {
            let removeIt = e.target.parentNode
            removeIt.remove()
        }

        let removeIt = e.target.parentNode
        removeIt.remove()
        removeIt.parentNode.removeChild(removeIt)

    }, false)
</script>

</html>`,
        path: "/code/javascript/events",
      },
      {
        id: "js-events-2",
        section: "JavaScript",
        page: "Dom",
        heading: "events two",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>harsh</h1>
    <button id="stop">Stop</button>
</body>
<script>
    // setTimeout(function(){
    //     console.log('harsh');        
    // },2000)

    const sayHii = function(){
        console.log('harsh');        
    }
    const change = function(){document.querySelector('h1').innerHTML='pankhaniya'}
    const  changeME = setTimeout(change,2000)

    document.querySelector('#stop').addEventListener('click',function(){
        clearTimeout(changeME)
        console.log('bapu');
        
    })
</script>
</html>`,
        path: "/code/javascript/events",
      },
      {
        id: "js-events-3",
        section: "JavaScript",
        page: "Dom",
        heading: "events three",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>harsh javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    // set interval 
    // let a = 1
    // const myInterval = function(){
    //     console.log(a);
    //     a++
    // }
    // setInterval(myInterval,1000)
    let a = 1
    const myInterval = function(e){ // e giving argument
        console.log(a,e);
        a++
    }
    // const intervalId = setInterval(myInterval,1000,'hii') // we can give argument at last
    let intervalId
    
    document.querySelector('#start').addEventListener('click',function(){
        intervalId = setInterval(myInterval,1000,'hii')
    })
    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(intervalId)
    })
</script>
</html>`,
        path: "/code/javascript/events",
      },
    ],
    api: [
      {
        id: "js-api",
        section: "JavaScript",
        page: "api",
        heading: "api intro",
        text: "",
        children: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <h1>Api's</h1>
    <button id="show">show</button>
</body>
<script>
    // this is ajax way to fatch data with API ********
    
    const myUrl = 'https://randomuser.me/api/'
    const xhr = new XMLHttpRequest()
    xhr.open('GET',myUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText)
                console.log(typeof data)
            // console.log(this.responseText);
            console.log(data.results[0].gender);            
        }
    }
    
    xhr.send()
    
    const myUrl = 'https://api.github.com/users/Harsh1234567899'
    const myDemo = document.querySelector('#show')
    myDemo.addEventListener('click',function(){
        const xhr = new XMLHttpRequest()
        xhr.open('GET',myUrl)
        xhr.onreadystatechange = function(){
            // console.log(xhr.readyState);
            if(xhr.readyState === 4){
                const data = JSON.parse(this.responseText)
                // const profile = [data.login,data.id,data.avatar_url]
                // console.log(profile);
                
                // console.log(this.responseText);
                myDemo.innerHTML = \`Username is <p>\${data.login}</p><br>
                ID is <p>\${data.id}</p><br>
                <img src='\${data.avatar_url}'></img>\`                
            }
        }      
        xhr.send()
    })
</script>
</html>`,
        path: "/code/javascript/api",
      },
      {
        id: "js-promise",
        section: "JavaScript",
        page: "api",
        heading: "promise",
        text: "",
        children: `fetch('').then().catch().finally()
const promise1 = new Promise( (resolve,reject) => {
    // do an aync task
    //DB calls , crypto , network
    setTimeout(function(){
        console.log("async taks is complete");
        resolve()
    },1000)
} )

promise1.then(function(){
    console.log("promise consumed");

})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async taask two");
        resolve()

    }, 3000);
}).then(function(){
    console.log("async two");

})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "harsh",age: 21})
    },1000)
})

promise3.then(function(user){
    console.log(user);

})

const promise4 = new Promise((resolve, reject) => {
setTimeout(function(){
    let error = false // ture or false
    if(!error){
        resolve({username: "harsh",age: 21})
    }else{
        reject("error")
    }
},1000)
})
// // cant store in variable to use it will give a error
promise4.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);

}).catch((e)=>{
    console.log(e);

}).finally(()=>{
    console.log("finally");

})

// async and await cant directly handel error********************
const promise5 = new Promise(function(resolve,reject){
        setTimeout(function(){
        let error = false // ture or false
        if(!error){
            resolve({username: "javascript",age: 21})
        }else{
            reject("error in js")
        }
    },1000)
})
async function consumePromise5() {
   const response = await promise5 
   console.log(response);

}
consumePromise5()


const promise5 = new Promise(function(resolve,reject){
        setTimeout(function(){
        let error = true // ture or false
        if(!error){
            resolve({username: "javascript",age: 21})
        }else{
            reject("error in js")
        }
    },1000)
})
async function consumePromise5() {
   try{
    const response = await promise5 
   console.log(response);
   }
   catch(error){
    console.log(error);    
   }   
}
consumePromise5()

//******************************** */
async function databaseDemo(params) {
    try {
        const url = await fetch('https://api.github.com/users/Harsh1234567899')        
        const data = await url.json() // respone come late so json is also need to await
        console.log(data);
    }
    catch(e){
        console.log(e);        
    }
}
databaseDemo()

fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((e)=>{
    console.log(e);
    
}).finally(()=>{
    console.log("hello");
    
})`,
        path: "/code/javascript/api",
      },
    ],
    oops: [
      {
        id: "js-oops",
        section: "JavaScript",
        page: "oops",
        heading: "class",
        text: "",
        children: `// ES6 

class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return \`\${this.password} this is your password\`
    }
    changeUser(){
        return\`\${this.username.toUpperCase()}\`
    }
}
const newUser = new user("harsh","harsh@gmail","123456")
// console.log(newUser.encryptPassword());
// console.log(newUser.changeUser());


// behind the scene

function user2(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user2.prototype.encryptPassword = function(){
    return \`\${this.password} this is your password\`
}
user2.prototype.changeUser = function(){
    return\`\${this.username.toUpperCase()}\`
}

const newUser2 = new user2("harsh2","harsh2@gmail","123456")
console.log(newUser2.encryptPassword());
console.log(newUser2.changeUser());`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-oops-function",
        section: "JavaScript",
        page: "oops",
        heading: "oops with function",
        text: "",
        children: `const user = {
    username: "harsh",
    login: 8,
    signedIn: true,

    getUser: function(){
        // console.log("get user database");
        console.log(\`username \${this.username}\`);
        console.log(this); // current contex
        
    }
}

// console.log(user.username);
// console.log(user.getUser());
// console.log(this);

// const promise1 = new Promise() // new keyword is a constructer 

function userName(username,loginCount,isLogged){
    this.username = username
    this.loginCount = loginCount
    this.isLogged = isLogged

    return this
}

const userOne = new  userName("harsh",5,true) // new keyword will give new instance of that funtion
const userTwo = new userName("harsh1",5,true)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-getter-setter",
        section: "JavaScript",
        page: "oops",
        heading: "object getter setter",
        text: "",
        children: `const user = {
    _email: "harsh@gmail",
    _password: "abc",

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(vallue){
        this._email = value
    }
}
const tea = Object.create(user)
console.log(tea.email); // email is now mwthod but get and set not convert in method 

// old way
function user(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const newUser = new user("harsh@google","abc")
console.log(newUser.email);
console.log(newUser.password);
`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-new-keyword",
        section: "JavaScript",
        page: "oops",
        heading: "new keyword ",
        text: "new keyword in object and class",
        children: `function multi(num){
    // this.num = num
    return num*5
}
multi.power=2
console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(\`price is \${this.score}\`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-__proto__",
        section: "JavaScript",
        page: "oops",
        heading: "prototype __proto__",
        text: "",
        children: `let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(\`Spidy power is \${this.spiderman}\`);
    }
}

Object.prototype.harsh = function(){  // create a new method that can use by any
    console.log(\`harsh is present in all objects\`);
}

Array.prototype.heyHarsh = function(){
    console.log(\`harsh says hello\`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.heyHarsh() // object method can run on any beacuase ervery thing in js is object 
// heroPower.heyHarsh()


// inheritance

const User = {
    name: "harsh",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(\`\${this}\`);
    console.log(\`True length is: \${this.trim().length}\`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-statick-super",
        section: "JavaScript",
        page: "oops",
        heading: "static and super keyword",
        text: "",
        children: `class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(this.username);
        
    }
    static Id(){
        return "123"
    }
}
const harsh = new user("harsh Pankhaniya")
// console.log(harsh.Id())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const phone = new teacher("IQOO","phone@gmail")
phone.logme();
// console.log(phone.Id())
console.log(user.Id());

`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-bind",
        section: "JavaScript",
        page: "oops",
        heading: "bind() method",
        text: "",
        children: `const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

// const myObject = Object.create(null)
const chai = {
    name: "cold chai",
    price: 250,
    isAvailable: true,

    orderchai(){
        console.log("this is wrongg way ");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{ // use when other will access over object but we want that anybudy cant change of do anything in my code
    writable: false, 
    enumerable: false
}) // or this is like static function other cant change value but in this other cant loop of do aynthing with this method
// use when other wants to use over databse or api
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) { // name property cant go in loop
    if (typeof value  !== 'function') {
        
        console.log(\`\${key} , \${value}\`);
    }
    
}`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-call",
        section: "JavaScript",
        page: "oops",
        heading: "call() method",
        text: "",
        children: `function setUsername(username){

    this.username = username
    console.log("function call");
    
}

function createUser(username,email,password){
    setUsername.call(this,username) // this passed the context of thire to caller function

    this.email = email
    this.password = password
}

const newuser = new createUser("harsh","harsh@gmail.com",123456)
console.log(newuser);
`,
        path: "/code/javascript/oops",
      },
      {
        id: "js-call",
        section: "JavaScript",
        page: "oops",
        heading: "call() method",
        text: "",
        children: ``,
        path: "/code/javascript/oops",
      },
    ]
  },
  git :{
    git : [
      {
        id: "git",
        section: "JavaScript",
        page: "git",
        heading: "git command",
        text: "",
        children: `git and GitHub


git ------

docs.chaicode.com

- in git bas  check the directory "pwd" is use

git init
 or file name // for unstage  git rm --cached file name
git commit -m "message"
git log - history for all commits // git log --oneline 
git branch   - for know in which branch we are working or all branch 
git branch <branch-name>  - use for create new branch
git switch <branch-name> - for move to branch
git switch -c <branch-name>  - create a branch if not exist and switch to that branch
git checkout <branch-name> - check the branch only not create new and switch to that branch
git merge <branch-name>  - merge  branch // after merge git add & commit
git merge --abort - cancel merge of two branch // before this check git status
git branch -m <branch-name> <new-branch-name> // give new name to branch
git branch -d <branch-name> // delete aa branch

git diff --staged // use to check what we change or add in file - before this git add 
git diff <branch-name> <branch-name> // use to campare branch
git diff branch-one..branch-two // space or ..

-- stash store in stack format
git stash - switch branch without commit in current branch
git stash save "text for change in file"
git stash list // give list of stash
git stash apply
git stash apply stash@{0} // number that we need to apply
git stash pop // apply and delete
git stash deop // delete
git stash apply stash{0} <branch-name> // APPLY  stash on specific stash
git stash clear

-- rebase and reflog
git rebase <branch-name>
git reflog
git reset --hard HEAD@{0}

-- git tag <tag name>// one type of notes
git tag -a <tag name> -m "release 1.0"


- .gitkeep file use for empty file

- touch filename for create new file using terminal

`,
        path: "/code/git",
      },
    ]
  },
  backend: {
    backend: [
        {            
        id: "backend-intro",
        section: "backend",
        page: "backend",
        heading: "backend setup",
        text: "intro",
        children: `https://github.com/hiteshchoudhary/chai-backend/tree/main

1) 
/: - home route
/login - login setup


2) requests -
GET
POST

3) 
npm init
package name: (backend-with-javascript) chaiBackend
version: (1.0.0) 
description: a basic app
entry point: (index.js) 
test command: 
git repository: gh repo clone Harsh1234567899/backend-with-javaScript
keywords: node chai
author: harsh
license: (ISC) 

ls - viwe files

inside package.json in scripts : add new run cammand ("start": "node index.js")

4) npm install express
5)
dot env - pakage use when want to run in different port
npm i dotenv
create new file  .env where we store database url port number etc.

6)
when want to run diffrent file as main file change name of file in package.json
- give proper path to run 
- "type": "commonjs", to module so express is find the file and give property 
    when use commonjs in file we use require and in module use module keyword

7) npm i axios 
- use for connect backend and fronted using url 

8) npm i mongoose 
- use for mongodb database
- moon modeler/ eraser.io -- for data base structure 

9) cors npm 
cors is provide security to our website for unknown url or path of url
cors is not allowing other url to enter in our website url expect we whitlist tham 

10)  npm i mongoose-aggregate-paginate-v2
- mongodb package to manage complex query

11) npm i bcrypt
- bcrypt is use to encrypt/decrypt the password

12) npm i jsonwebtoken (json web token / jwt)
- jwt.io

13) import fs from "fs"
- node file manager 

14) npm i multer cloudinary
-cloudinary image and file storage
- multer frist store in local storage or server than after some time send to cloudinary

15) mongodb aggregation piplines
- link data like in sql one table addresh share with other table

16) Socket.IO ,grapgql , sql db

17 ) "dev": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && npm run dev",
    "client": "cd frontend && npm run dev"
    --- concurrently is help to run backend and fronted with one command`,
        path: "/code/backend/backend",
        },
        {            
        id: "cloudinary-setup",
        section: "backend",
        page: "backend",
        heading: "cloudinary",
        text: "cloudinary setup",
        children: `import {v2 as cloudinary} from "cloudinary";
import fs from "fs"
import { extractPublicId } from 'cloudinary-build-url';
import { ApiError } from "./ApiError.js";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
})
// console.log(process.env.CLOUDINARY_NAME,process.env.CLOUDINARY_API,process.env.CLOUDINARY_SECRET);


const uploadOnCloudinary = async (localFilePath , folder = "") => {
    try {
        if (!localFilePath) return null // check file path is there or not
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: folder // use to give aa folder path
        })
        // console.log("cloudinary response",response);
        
        //file upload success
        // console.log("fill upload in cloudinary", response.url); // give a url of the file uplload 
        fs.unlinkSync(localFilePath);
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
        }
        return null

    }
}

const deleteOnCloudinary = async (imageURL) => {
    try {
        if (!imageURL) {
            throw new ApiError(404, "Image Invalid")
        }
        //delete the file on cloudinary
        const publicId = extractPublicId(imageURL);
        const resourceType = imageURL.includes("/video/")
            ? "video"
            : "image";
        
        const response = await cloudinary.uploader.destroy(publicId ,{
            resource_type: resourceType
        });
        if(response.result != 'ok'){
            throw new ApiError(404, "Old Image Deletion Failed from Cloudinary")
        }

        // file has been deleted
        return 1;

    } catch (error) {
        throw new ApiError(400,"cloudinary delete catch block");
    }
}



const replaceOnCloudinary = async (localFilePath, oldFileUrl, folder = "") => {

    if (!(localFilePath && oldFileUrl)) {
        throw new ApiError(401,"old and new file path is requierd")
    }
    const newFile = await uploadOnCloudinary(localFilePath, folder);
    if (!newFile?.url) { 
        throw new ApiError(401,"new file is not upload")
    };

    const deletefile =  await deleteOnCloudinary(oldFileUrl);
    
    return newFile;
};

export {uploadOnCloudinary  ,replaceOnCloudinary ,deleteOnCloudinary}`,
        path: "/code/backend/backend",
        },
        {
        id: "jwt",
        section: "backend",
        page: "backend",
        heading: "jwt",
        text: "jwt setup",
        children: `userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
} // in usermodel
 //in user controller
 const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const giveUserToken =  await User.findById(userId) 
        const accessToken = giveUserToken.generateAccessToken()
        const refreshToken = giveUserToken.generateRefreshToken()

        giveUserToken.refreshToken = refreshToken // give to db 
        await giveUserToken.save({validateBeforeSave: false}) // save token // if validation is not false than need to again verfy the user
        return {accessToken , refreshToken}
    } catch (error) {
        throw new ApiError(500,"somthing went wrong while generate tokens")
    }
}
`,
        path: "/code/backend/backend",
        },
        {
        id: "api-response",
        section: "backend",
        page: "backend",
        heading: "Api-response",
        text: "api response",
        children: `class ApiResponse {
    constructor(statusCode , data , message = "success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
export {ApiResponse}`,
        path: "/code/backend/backend",
        },
        {
        id: "api-error",
        section: "backend",
        page: "backend",
        heading: "Api-error",
        text: "utils api error",
        children: `class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}`,
        path: "/code/backend/backend",
        },
        {
        id: "asynce -handeler",
        section: "backend",
        page: "backend",
        heading: "asynce handler",
        text: "utils asynce handler",
        children: `const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }`,
        path: "/code/backend/backend",
        },
        {
        id: "user controller",
        section: "backend",
        page: "backend",
        heading: "user controller",
        text: "user controller example",
        children: `import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {replaceOnCloudinary, uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const giveUserToken =  await User.findById(userId) 
        const accessToken = giveUserToken.generateAccessToken()
        const refreshToken = giveUserToken.generateRefreshToken()

        giveUserToken.refreshToken = refreshToken // give to db 
        await giveUserToken.save({validateBeforeSave: false}) // save token // if validation is not false than need to again verfy the user
        return {accessToken , refreshToken}
    } catch (error) {
        throw new ApiError(500,"somthing went wrong while generate tokens")
    }
}

const registerUser = asyncHandler( async (req,res) => {
    // res.status(200).json({
    //     message: "ok"
    // })

    // get user details from frontend
    // validation - not empty
    // check if user already exists : username , email
    // check for images , check for avtar
    // upload to cloudinary , avtar
    // create user object - create entry in db
    // remove password and refersh token from response
    // check for user creation
    // response return

    const {fullname , email , username , password  }=req.body
    // console.log( email );

    // if (fullname === "") {
    //     throw new ApiError(400,"fullname is required")
    // }
    if ([fullname , email , username , password].some((field)=>  field?.trim() === "") ){ // check fileds are empty or not
        throw new ApiError(400, "All fiels required");
    }

    const existedUser = await User.findOne({ // check if user is already in databse or not 
        $or: [ { username } , { email } ]
    })
    if (existedUser) {
        throw new ApiError(409,"user already exist");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path; // check the local path
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400,"avatar file is required 1")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath, "chai-bakend-youtubeclone-code/avatars") 
    const coverImage = await uploadOnCloudinary(coverImageLocalPath, "chai-bakend-youtubeclone-code/coverimage") // folder path to upload in cloudinary

    if (!avatar) {
        throw new ApiError(400, "avatar file is required 2") // check avtar is upload or not
    }

    const user = await User.create({ // store user in  db
        fullname,
        avatar: avatar.url, // save only url
        coverImage: coverImage?.url || "", // check cover image is there or not or in empty case store nothing
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select("-password -refershToken") // remove password and refreshtoken filed in response

    if (!createdUser) {
        throw new ApiError(500,"somthing went wrong while register user")
    }

    return res.status(201).json( // send response to db
        new ApiResponse(200,createdUser ,"user registered ...")
    )

})

const loginUser = asyncHandler(async (req,res) => {
    // get user ditails from db
    //validation 
    // check passwrod and username correct or not
    // password decreypt and again encrypt after compare
    // compare from bd data
    // login

    //req body for data
    // username or email
    // find the user
    // passwrod check
    //access and refresh token
    // send cookie

    const {email , username , password} = req.body
    // if (!username && !email) {
    //     throw new ApiError(400,"username or email is required")
    // }
    

    if (!(username || email)) {
        throw new ApiError(400,"username or email is required")
    }

    const user = await User.findOne({
        $or : [{username},{email}]
    })

    if (!user) {
        throw new ApiError(404,"user not found")
    }

    const isPasswordValid = await user.isPassword(password) // check password is same or not

    if (!isPasswordValid) {
        throw new ApiError(401,"password incorect")
    }

    const {accessToken , refreshToken} = await generateAccessTokenAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refershToken")

    const options = { // help to not modify the cookies 
        httpOnly: true,
        secure: true
    }
    return res.status(200).cookie("accessToken", accessToken ,options).cookie("refreshToken",refreshToken,options)
.json( new ApiResponse(200,{user: loggedInUser , accessToken , refreshToken},"user logged In done"))
})

const loggedOutUserWhenTokenExpire = asyncHandler(async (req,res) => {
    await User.findByIdAndUpdate( // update the token
        req.user._id,
        {
            // $set: {
            //     refreshToken: undefined
            // }
            $unset:{
                refreshToken: 1
            }
        },
        { // give new value of token
            new: true
        }
    )
    const options = { // not alloed to modify the cookies
        httpOnly: true,
        secure: true
    }
    return res.status(200).clearCookie("accessToken",options).clearCookie("refreshToken",options).json(new ApiResponse(200,{},"user logged out"))
})

const refershAccessToken = asyncHandler(async (req,res) => {
    const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401,"unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET) // check from db to verify and give new access token
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401,"invalid referes token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401,"refresh token is expired")
        }
    
        const options = { // not alloed to modify the cookies
            httpOnly: true,
            secure: true
        }
    
        const {accessToken,newRefreshToken} = await generateAccessTokenAndRefreshToken(user._id)
    
        return res.status(200).cookie("accessToken" , accessToken ,options).cookie("refreshToken",newRefreshToken , options).json(new ApiResponse(200,{accessToken,refreshToken: newRefreshToken},"access token refreshed"))
    } catch (error) {
        throw new ApiError(401,error?.message || "invalid refresh token")
    }
})

const changeCurrentPassword = asyncHandler(async (req,res) => {
    const {oldPassword , newPassword , confiremPassword} = req.body
    const user = User.findById(req.user?._id) // get this from user auth middelwear
    const isPasswordCorrect = await user.isPassword(oldPassword) // check old password and new password is same or not

    if (!isPasswordCorrect) {
        throw new ApiError(400,"old password is wrong")
    }
    if (!(newPassword === confiremPassword)) {
        throw new ApiError(400,"new password and confirem password is not matched")
    }
    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res.status(200).json(new ApiResponse(200),{},"password changed")
})

const getCurrentUser = asyncHandler(async (req,res) => {
    return res.status(200).json(new ApiResponse(200,req.user,"current user fatched successfully"))
})

const updateAccountDetails = asyncHandler (async (req,res) => {
    const {fullname ,email}=req.body

    if (!fullname || !email) {
        throw new ApiError(400,"all fileds are required")
    }

    const user =await User.findByIdAndUpdate(req.user?._id , {$set: {fullname: fullname,email: email}},{new: true}).select("-password -refreshToken")

    return res.status(200).json(new ApiResponse(200 ,user,"account updated"))
})

const updateAvatar = asyncHandler(async (req,res) => {
    const avatarLocalPath = req.file?.path // get a path of  avatar
    const avatardbPath = req.user?.avatar

    if (!avatarLocalPath) {
        throw new ApiError(400,"avatar file is missing")
    }

    const avatar = await replaceOnCloudinary(avatarLocalPath,avatardbPath ,"chai-bakend-youtubeclone-code/avatars")

    if (!avatar.url) {
         throw new ApiError(400,"error while uploading on avatar")
    }

    const user = await User.findByIdAndUpdate(req.user?._id, { $set:{avatar: avatar.url}},{new:true}).select("-password -refreshToken")

    return res.status(200).json(new ApiResponse(200,user,"avatar updated"))
})

const updateCoverImage = asyncHandler(async (req,res) => {
    const coverImageLocalPath = req.file?.path // get a path of cover image
    const coverImagedbpath = req.user.coverImage

    if (!coverImageLocalPath) {
        throw new ApiError(400,"cover image file is missing")
    }

    const coverImage = await replaceOnCloudinary(coverImageLocalPath,coverImagedbpath ,"chai-bakend-youtubeclone-code/coverImage")

    if (!coverImage.url) {
         throw new ApiError(400,"error while uploading on cover image")
    }

    const user = await User.findByIdAndUpdate(req.user?._id, { $set:{coverImage: coverImage.url}},{new:true}).select("-password -refreshToken")

    return res.status(200).json(new ApiResponse(200,user,"cover image updated"))
})

const getUserChannelProfile = asyncHandler(async (req,res) => {

    const {username} = req.params // get user from url

    if (!username?.trim()) {
        throw new ApiError(400,"username is missing")        
    }

    // User.find({username})
    const channel = await User.aggregate([ //aggregation pipline
        {
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: { // this for count subscribers
                from: "subscription",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: { // this for count how many user have subscribed
                from: "subscription",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: { // add filds subscriber count , subscribed or not 
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelsSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: { // cond for condition
                        if: {$in: [req.user?._id , "$subscribers.subscriber"]},
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: { // send this filds to frontend 
                fullname: 1,
                username: 1,
                subscribersCount: 1,
                channelsSubscribedToCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1
            }
        }
    ])
    console.log(channel);
    if (!channel?.length) {
        throw new ApiError(404,"channel not exists")
    }

    return res.status(200).json(new ApiResponse(200,channel[0],"user channel fatched"))
    
})

const getUserWatchHistory = asyncHandler(async (req,res) => {
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos", // here not use model export name but name that mongodb store
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [ // pipline inside pipline of video owner
                    {
                        $lookup:{
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullname: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        },

    ])
    if (!user?.length) {
        throw new ApiError(404,"no watched videos")
    }

    return res.status(200).json(new ApiResponse(200,user[0].watchHistory,"watch history fetched"))
})
export {registerUser,
     loginUser, 
     loggedOutUserWhenTokenExpire,
     refershAccessToken, 
     changeCurrentPassword,
     getCurrentUser,
     updateAccountDetails, 
     updateAvatar,
     updateCoverImage,
     getUserChannelProfile,
     getUserWatchHistory
} `,
        path: "/code/backend/backend",
        },
        {
        id: "model",
        section: "backend",
        page: "backend",
        heading: "model",
        text: "model example",
        children: `
import mongoose , {Schema}  from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url

    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "password is require"]
    },
    refershToken: {
        type: String,
    }
},{timestamps: true})

userSchema.pre("save", async function(next) { // password encrypt before password save
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPassword =async function (password) { // compare password 
    return await bcrypt.compare(password , this.password) // return only true or false password is equal or not
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export  const User = mongoose.model("User",userSchema)`,
        path: "/code/backend/backend",
        },
        {
        id: "db-connect",
        section: "backend",
        page: "backend",
        heading: "mongodb databse connect",
        text: "mongodb database",
        children: `import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance =  await mongoose.connect(\`\${process.env.MONGODB_URI}/\${DB_NAME}\`)
        console.log(\`\n mongo db connected!!!! DB HOST : \${connectionInstance.connection.host}\`);
        
    } catch (error) {
        console.log("mongo db connection error", error);
        process.exit(1)
        
    }
}
export default connectDB`,
        path: "/code/backend/backend",
        },
        {
        id: "routes",
        section: "backend",
        page: "backend",
        heading: "routes",
        text: "routes example",
        children: `import { Router } from "express";
import { loggedOutUserWhenTokenExpire, loginUser, registerUser, refershAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateAvatar, updateCoverImage, getUserChannelProfile, getUserWatchHistory } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post( upload.fields([{name: "avatar", maxCount: 1},{name: "coverImage", maxCount: 1}]), registerUser)

router.route("/login").post(loginUser)

// secure router middlewear
router.route("/logout").post(verifyJWT, loggedOutUserWhenTokenExpire)
router.route("/refresh-token").post(refershAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route("/update-account").patch(verifyJWT,updateAccountDetails)
router.route("/update-avatar").patch(verifyJWT,upload.single("avatar"), updateAvatar)
router.route("/update-coverimage").patch(verifyJWT,upload.single("coverImage"), updateCoverImage)
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)
router.route("/watch-history").get(verifyJWT ,getUserWatchHistory)

export default router`,
        path: "/code/backend/backend",
        },
        {
        id: "jwt",
        section: "backend",
        page: "backend",
        heading: "jwt",
        text: "jwt setup",
        children: ``,
        path: "/code/backend/backend",
        },
    ]
  }

};
