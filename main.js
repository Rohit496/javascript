console.log('Script loaded successfully');

/******************* var variable demo  ********************/


// variables for the javascript
// for var can be update and re-declared

// scope:
// 1. global scope
// 2. function scope


// initialize the variable
var userName = 'John Doe';
console.log(userName);

// update the variable
userName = 'David Smith';
console.log(userName);

// re-declare the variable
var userName = 'Sumit Singh';
console.log(userName);

// function level scope
function sayHello() {
    var language = 'english';
    console.log(language);
}
sayHello();
console.log(window.language);


// block level scope
if (2 == 2) {
    var num = 10;
    console.log(num);
}
console.log(num);

/******************* let variable demo ********************/

// properties of let variable
// 1. we can update the let keyword
// 2. we can not re-declare the let keyword

// initialize the variable
let myData = 'David'
console.log(myData);

// update the variable
myData = 'David 2'
console.log(myData);


// re-declare the let keyword

/*  error
let myData = 'David 3'
console.log(myData);
*/

// function level scope
function sayHello1() {
    let language1 = 'english1';
    console.log(language1);
}
sayHello1();
// console.log(language1); error


// block level scope

if (2 == 2) {
    let num2 = 10;
    console.log(num2);
}
// console.log(num2); error




/************************** const variable demo*****************************/


// properties of const variable

// 1. const can not be updated
// 2. const can not be re-declared


// initialize the variable
const company = 'Google';
console.log(company);

// update the const variable
//company = 'Google 2';  // error
//console.log(company);  // error



// re-declared const variable
//let company = 'Google 2';
//console.log(company);



// function level scope
function level() {
    const com1 = 'Google-1';
    console.log(com1);
}
level();
//console.log(com1);



// block level scope
if (2 == 2) {
    const com2 = 'Google-2';
    console.log(com2);
}
// console.log(com2); //error