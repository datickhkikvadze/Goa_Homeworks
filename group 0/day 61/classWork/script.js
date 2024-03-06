const me = {
    name: "dati",
    surname:"Cxkhikvadze",
    age : 12,
    favColor : "green"
}
const friend1 = {
    name: "gio",
    surname : "gagnidze",
    age : 12,
    favColor : "purple"
}
const friend2 = {
    name: "Mate",
    surname:"Rexviashvili",
    age : 12,
    favColor : "green"
}

me.favColor = "blue"
me.youngestLeader = true

console.log(me , friend1 , friend2)


const car = {
    name:"bwm",
    model:"bwm",
    weight:850,
    start: function () {
        console.log("car is starting")
    }
}

car.start() = function () {
    console.log("hello world")
}

car.break = function (second) {
    for (let i = 0; i < 5; i++) {
        console.log(`startin in ${second} second`)
    }
}

car.break(5)