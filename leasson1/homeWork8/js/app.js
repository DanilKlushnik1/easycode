const btn = document.querySelector("#btn-msg")
btn.addEventListener("click", function(e){
    return  e = alert(document.getElementById("btn-msg").textContent)
})

btn.addEventListener("mouseover", function(e){
    return e = document.getElementById("btn-msg").style.color = "red"
},)

btn.addEventListener("mouseout", function(e){
    return e = document.getElementById("btn-msg").style.color = "black"
},)

const idTag = document.querySelector("#tag")

idTag.addEventListener("click", function(){
    console.log(idTag.nodeName)
})

const genLi = document.querySelector("btn-generate")
const e = document.getElementsByTagName("ul")

genLi.addEventListener("click", function(e){
    const newLi = (ev) =>{
        if (ev.target.tagName === "LI") { console.log("‘Li was clicked!’"); }
    }
    return newLi(e)  
})

