const multi = document.getElementById("multiply")
const div = document.getElementById("divide")
const add = document.getElementById("add")
const sub = document.getElementById("subtract")
const clr = document.getElementById("clear")
var result = document.getElementById("result")

multi.addEventListener("click", function(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let answer = Number(x) * Number(y)
   document.getElementById("result").innerHTML= answer
})

div.addEventListener("click", function(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let answer = Number(x) / Number(y)
   document.getElementById("result").innerHTML= answer
})

add.addEventListener("click", function(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let answer = Number(x) + Number(y)
   document.getElementById("result").innerHTML= answer
})

sub.addEventListener("click", function(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let answer = Number(x) - Number(y)
   document.getElementById("result").innerHTML= answer
})

clr.addEventListener("click", function(){
    document.getElementById("x").value = ''
    document.getElementById("y").value = ''
    document.getElementById("result").innerHTML = ''

})

