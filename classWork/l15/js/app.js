 const start = document.querySelector("#play")
const pause = document.querySelector("#pause")

start.addEventListener("click", function(){
    const vid = document.getElementById("video") 
    return vid.play();
})

pause.addEventListener("click", function(){
    const vid = document.getElementById("video") 
    return vid.pause();
})
//обротится к диву с длинной
//обротится к диву не прозрачный
//

const emptyField = document.getElementById("firstLoad")
const load = document.getElementById("secondLoad")
const vid = document.getElementById("video")
load.style.height = "10px"
load.style.background = "red"
load.style.width = "200px"
emptyField.style.height = "10px"
emptyField.style.background = "yellow"
emptyField.style.width = "200px"
