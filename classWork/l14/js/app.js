const input = document.querySelector("input")

input.addEventListener("click",function(ev){
    if(ev.target.tagName === "button"){
        return ev.target.call(input)
    }
},)
