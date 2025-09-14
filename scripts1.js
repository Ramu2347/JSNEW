var input = document.querySelector("input")

function add1(e){
    input.value = input.value + e  //null + "%" = %
    // input.value = "%" + "%" = %%
}

function removeAll(){
    input.value = ""
}

function lastRemove(){
    input.value = input.value.slice(0,input.value.length-1)
}

console.log(eval(100+10));

function final(){
    input.value = eval(input.value)
}


let h1= document.querySelector("h1")


var button1 = document.querySelector(".added")
button1.addEventListener("click", function(){
    h1.style.color = "red"
})

var button2 = document.querySelector(".removed")
button2.addEventListener("click", function(){
    h1.style.color = "blue"
})
var button3 = document.querySelector(".changed")
button3.addEventListener("click", function(){
    h1.style.color = "green"
}) 
function currency(){
input.value = eval(input.value)*89



}