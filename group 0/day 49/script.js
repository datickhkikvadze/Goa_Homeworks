let input = document.getElementById("input")
let deposit = document.getElementById("deposit")
let withdraw = document.getElementById("withdraw")
let balance = document.getElementById("balance")


deposit.addEventListener("click",function(){
    balance.textContent = "your balance is:" + input.value + "!"
    input.value = null
})

// withdraw.addEventListener("click",function(){
//     realBalance
//     balance.textContent = 
// })