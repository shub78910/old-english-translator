var btntrans = document.querySelector(".butt");
var inputt = document.querySelector(".input");
var outputt = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/oldenglish.json"

//tanay: https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

//oldeng: "https://api.funtranslations.com/translate/oldenglish.json"

function getURL(text){
    return serverURL+"?"+"text="+ text
}

function errorss(error){
    alert("Oops, something went wrong. Please try after some time.")
}

function clickHandle() {
    
    var inputtxt = inputt.value;

    fetch(getURL(inputtxt))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated
            outputt.innerText = translatedtext
        })
        .catch(errorss)
}


btntrans.addEventListener("click",clickHandle);