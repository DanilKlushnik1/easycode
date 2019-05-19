

function http(callback) {const xhr = new XMLHttpRequest()

xhr.open("GET","https://newsapi.org/v2/top-headlines?q=word")

xhr.setRequestHeader("X-Api-Key", "56fdd8c58b9c4bc7bdbf9837b9916b82")

xhr.send()

xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));

}

http(function(response){console.log(response)})

let btn = document.querySelector("button")

function onButtonClick(e) {
    
    //сходить и забрать строку из инпута
    let input = document.querySelector("input")
    //подставить строку в юрл
    //передать юрл в http
    //обработать респонс от http

}