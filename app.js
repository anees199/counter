var decrease = document.getElementById("decrease")
var increase = document.getElementById("increase")
var reset = document.getElementById("reset")
var counter = document.getElementById("counter")
let count = 0

increase.onclick = function(){
    count++;
    counter.innerHTML = count
}
decrease.onclick = function(){
    count--;
    counter.innerHTML = count
}
reset.onclick = function(){
    count= 0;
    counter.innerHTML = count
}