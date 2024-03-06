
// Create an object named person with properties name, age, and city.
// const person = {
//     name: "dati",
//     age: 12,
//     city: "Tbilisi"
// }

//Access the name property of the person object you created in the previous exercise.

// console.log(person.name)

// Change the age property of the person object to a new value.
 

// person.age = 13

//Add a new property named country to the person object and set its value. 

// person.country = "Gerorgia"

// Add a method named greet to the person object that logs a greeting message including the person's name.


// person.greet = function(){
//     console.log(`Welcome ${person.name} !`)
// }


// Create two objects with the same properties and values. Use the === operator to compare them. Log the result.


// const twin1 = {
//     name: "gela",
//     age:15,
//     favColor:"green"
// }
// const twin2 = {
//     name: "gela",
//     age:15,
//     favColor:"green"
// }


// console.log(twin1 === twin2)


// Create an object named school with properties name and students, where students is an array of objects representing student names and ages. Access a student's name and age from the school object.

// const school = {
//     name: "5th public school",
//     students: [
//         student1 = { 
//             name: "Gela", 
//             age: 15
//         },
//         student2 = { 
//             name: "Dati", 
//             age: 13 
//         },
//         student3 ={ 
//             name: "Nika", 
//             age: 16
//         }
//     ]
// }
// const student1Name = school.students[0].name;
// const student1Age = school.students[0].age;
// const student2Name = school.students[1].name;
// const student2Age = school.students[1].age;
// const student3Name = school.students[2].name;
// const student3Age = school.students[2].age;
// console.log("Student Name:", student1Name); 
// console.log("Student Age:", student1Age);  
// console.log("Student Name:", student2Name); 
// console.log("Student Age:", student2Age);  
// console.log("Student Name:", student3Name); 
// console.log("Student Age:", student3Age);  

// Create an object called calculator with methods add, subtract, multiply, and divide that perform basic arithmetic operations on two numbers.

// const calculator  = {
//     add:function(num1,num2){
//         return(num1 + num2)
//     },
//     subtract:function(num1,num2){
//         return(num1 - num2)
//     },
//     multiply:function(num1,num2){
//         return(num1 * num2)
//     },
//     divide:function(num1,num2){
//         return(num1 / num2) 
//     },
// }

// console.log(calculator.add(15,15))


// Create an HTML form with fields for username and password. Use JavaScript to validate that the username is at least 5 characters long and the password is at least 8 characters long when the form is submitted. if validate add them into object.

let submitBtn = document.getElementById("submit")

function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username.length >= 5 && password.length >= 8){
        const userData = {
            username: username,
            password: password
        };


        console.log("User data:", userData);
    } else {
        alert("Please check your input.");
    }
}

submitBtn.addEventListener("click" , validate())