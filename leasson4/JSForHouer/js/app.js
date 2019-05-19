let myNodeList = document.getElementsByTagName("li")
for (i=0; i<myNodeList.length; i++){
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(i=0; i<close.length;i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector("ul");

list.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
},false);

function newElement() {
    let li = document.createElement("li")
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ""){
        alert("Поле не может быть устым")
    }else{
        document.getElementById("myUL").appendChild(li)
    }
document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0;i< close.length; i++){
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none"
        }
    }
}