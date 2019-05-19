function http(url){
    return new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest()
    xhr.open("GET",url)
    xhr.setRequestHeader("X-Api-Key", "56fdd8c58b9c4bc7bdbf9837b9916b82")
    xhr.send()
    xhr.addEventListener('load', () => resolve(JSON.parse(xhr.responseText)));
    xhr.addEventListener("error", () => reject(xhr.status, url))
    })
}



http("https://newsapi.org/v2/top-headlines?q=word")
    .then(function(response){console.log(response)})
    .then(document.querySelector("button"))
    .then()


// function revolving(){
//     return new Promise(function(resolve,reject){

//     })
// }