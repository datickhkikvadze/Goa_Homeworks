// const me = {
//     name: 'dati',
//     lastname: 'chkhikvadze',
//     age: 17,

//     changeName: function(newName){
//         me.name = newName;
//     }
// }

// me.changeName('Nika');

// const database = {
//     account1: {
//         name: 'dati',
//         lastname: 'chkhikvadze',
//         age: 12
//     },

//     account2: {
//         name: 'Nika',
//         lastname: 'Keshelava',
//         age: 24
//     }
// }


// const car = {
//     name: 'Mercedes Benz',
//     color: 'Black',
//     model: '190e',
//     doors: 4,

//     engine: {
//         horsePower: 109,
//         km: 185,
//         power: 80,
//         cilindre: 8
//     },

//     getEngine: function(){
//         return car.engine;
//     }
    
// }

// const form = document.getElementById('form');
// const btn = document.getElementById('btn');

// let accountObj = {}

// btn.addEventListener('click',function(){
//     accountObj.name = form.elements.name.value;
//     accountObj.lastname = form.elements.lastname.value;
//     accountObj.age = form.elements.age.value;

//     console.log(accountObj);
// });

// console.log(accountObj)

// const me = {
//     name: 'dati',
//     lastname: 'Chkhikvadze',
//     age: 12
// }

// const you = {
//     name: 'Nika',
//     lastname: 'Keshelava',
//     age: 24
// }

// const administrator = {
//     changeName: function(accountObj,newName){
//         accountObj.name = newName;
//     },

//     changeLastname: function(accountObj,newLastname){
//         accountObj.lastname = newLastname;
//     },

//     changeAge: function(accountObj,newAge){
//         accountObj.age = newAge;
//     }
// }

// administrator.changeName(me,'temo');
// administrator.changeLastname(you,'Boboxidze');

// console.log(me);
// console.log(you);

// 1: შექმენით 2 ობიექტი me, you სადაც შეიტანთ me ობიექტში თქვენს ინფორმაციას და you ში ლუკა მასწის ინფორმაციას.                                        
// 2: დაამატე თითოეულ ობიექტში getname მეთოდი რომელიც დააბრუნებს კონკრეტული ობიექტიდან სახელს.                                               
// 3: შექმენით ფორმა htmlში 2 ინფუთით რომლის ტიპიც არის რიცხვი ასევე ერთი ღილაკი რომლითაც წამოიღებ ორივე რიცხვს nameბით                           
// 4: ყოველ ჯერზე როცა ახალი ექაუნთი გაკეთდება შეიტანეთ მასივში წინა ობიექტი 
// 5: me და you ობიექტებში დაამატეთ ახალი კუთვნილება bank account სადაც გაუწერთ ბანკის ანგარიშის შესახებ ინფორმაციას

const me = {
    name: "dati",
    lastName: "Chkhikvadze",
    age: 12,
    getName: function(){
        return me.name
    },
    pin: 465
}
const you = {
    name: "luak",
    lastName: "Tskhvaradze",
    age: 17,
    getName: function(){
        return you.name
    },
    pin: 424
}

const form = document.getElementById('form');
const btn = document.getElementById('btn');

let accountObj = {}

btn.addEventListener('click',function(){
    accountObj.num = form.elements.num.value
    accountObj.num1 = form.elements.num1.value

    console.log(accountObj)
})

console.log(accountObj)
