//Variables declaration question
let name = "Tobi Obaremo"
let age = 24
let city = "Ikeja, Lagos"
let isMarried = false

console.log(name, age, city, isMarried)

// Arithmetic operations with variable
let num1 = 25
let num2 = 30

// addition
let sum = num1 + num2
console.log(sum)

// subtraction
let difference = num1 - num2
console.log(difference)

// multiplication
let product = num1 * num2
console.log(product)

// division
let dividend = num1 / num2
console.log(dividend)

// String concatenation
let firstName = "Tobi"
let lastName = "Obaremo"
let fullName = firstName + " " + lastName
// let fullName = `${firstName} ${lastName}`
console.log(fullName)
console.log("Welcome " + firstName)

// Data type identification
let x = 'Tobi'
let y = 24
const completed = false
let tobi;
console.log(tobi)
let addTask = null
let laptops = ["HP", "Dell", "Asus"]
// console.log(addTask = "Tobi")
console.log(`${typeof (x)}, ${typeof (y)}, ${typeof (completed)}, ${typeof (tobi)}, ${typeof (addTask)} ${typeof (laptops)}`)


// conditional statement
// prompt a user to input a number
// Use an if...else if statement to check if the number is postive, negative or zero
// let input = Number(prompt("Enter a number"))
// if (input > 0){
//     alert(`${input} is a postive number`)
// }else if (input < 0){
//     alert(`${input} is a negative number`)
// }else{
//     alert(`${input} is zero`)
// }

// Simple if-Else on voting eligibility
// Ask the user for their age using propmt()
// Use an if statement to determine if the age is 18 or more.
// Print a message confirming their voting eligibility.

let myAge = parseInt(prompt('Enter your age', 0))
if (!myAge){
    alert('Please enter a valid age')
}else if (myAge >= 18) {
    alert(`You are ${myAge} years old. So you are eligible for voting`)
}else{
    alert(`You are ${myAge} years old. So you are not eligible for voting`)
}

// Temperture Conversion
// Declare a variable for temperature in celcius
// Use the formula F = (C * 9/5) + 32 to calculate Fahrenheit
// Print the fahrenheit temperature

// let C = 10
// let fahrenheit = (C * 9/5) + 32
// console.log(fahrenheit)


// Working with arrays
// Create an array of 5 items (e.g fruits)
// Access and log the first, middle and last elements
// let fruits = ["Banana", "Orange", "Mango", "Pineapple", "Apple", "Cherry"]
// let firstFruit = fruits[0]
// [Math.floor((fruits.length-1)/2)] to access the lower middle index
// let middle1 = fruits[Math.floor((fruits.length-1)/2)]
// [Math.ceil((fruits.length-1)/2)] to access the upper middle index
// let middle2 = fruits[Math.ceil((fruits.length-1)/2)]
// let lastFruit = fruits[fruits.length-1]

// console.log(`fisrt: ${firstFruit}, middle: ${middle1} and ${middle2}, last: ${lastFruit}`)

// Add and remove elements
// Start with an array of 5 element
// Add 2 elements using push()
// Remove one element using shift().
// Print the modified array.

// let secondFruits = ["Banana", "Orange", "Mango", "Pineapple", "Apple", "Cherry"]
// console.log(secondFruits)
// push()
// secondFruits.push("Cashew", "Grape")
// console.log(secondFruits)

// shift() removes the first index
// secondFruits.shift()
// console.log(secondFruits)
// secondFruits.splice(3,1)
// console.log(secondFruits)

// Using loops with arrays
// create an array of items
// Use a for loop to iterate through the array.
// Log each item during the iteration.

// let classList = ['Danny', 'Teni', 'Ujunwa', 'Tobi', 'Jasper', 'Destiny', 'Osose']
// let i = 0 is for starter value, i represents each item in the array
// i < classList.length this is condition which means if the index is lesser than the length of the array
// i++
// for (let i = 0; i < classList.length; i++) {
//     console.log(classList[i])
// }


// Function Basics
// Write a function that accepts a name as a parameter.
// Inside the function, construct a greeting message using the name.
// Print the greeting when the function is called.
// function greetUser(){
//     let user = 'Tobi'
//     return alert(`Hello, ${user}!`)
// }

// let btn = document.getElementById('btn')
// btn.addEventListener('click', greetUser)

// Object Creation
// Create an object with properties like brand, model, and year
// Access and log one of the properties using dot notation

// let car = {
//     brand : "Honda",
//     model : "Accord",
//     year : 2000
// }
// console.log(car.model)

// DOM Manipulation: Change Text
// Create an HTML paragraph with some text.
// Use JavaScript to select the paragraph using its ID or class.
// Replace its content with new text.

// const change = document.getElementById ('change');
// change.innerHTML = "Tobi"

// DOM Manipulation: Background Color
// Create an HTML <div> and a button.
// Add an event listener to the button in JavaScript.
// Change the <div> background color when the button is clicked.
// const bg = document.getElementById ('bg')
// const changeBackground = document.getElementById ('changeBackground')

// changeBackground.addEventListener('click', changeBg)


// function changeBg(){
//     if (bg.style.backgroundColor === 'aqua' && changeBackground.innerHTML === "Change to background to purple") {
//         bg.style.backgroundColor = 'purple'
//         changeBackground.innerHTML = 'Change to background to aqua'
//     } else {
//         bg.style.backgroundColor = 'aqua'
//         changeBackground.innerHTML = 'Change to background to purple'
//     }
    // bg.style.textContent.backgroundColor = 'purple', 'tobi'
// }

