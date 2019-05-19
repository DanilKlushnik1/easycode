
let counter = 0
let t =  document.getElementById("timer")

function time(){
    t.innerHTML = counter++
    
    return t
}
setInterval("time()",1000)