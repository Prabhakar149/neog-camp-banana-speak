var btnInput = document.querySelector("#btn-input");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#output-text");

// var serverURL = "http://translation-api.prabhakar149.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationText(input){
    return serverURL + "?" + "text=" + input;
}

function clickHandle(){
    var inputText = textInput.value;

    // calling server for processing
    fetch(getTranslationText(inputText))
        .then(response => response.json())
        .then(jsonContent =>{
            var translatedContent = jsonContent.contents.translated;
            textOutput.innerText = translatedContent;
        })
}

btnInput.addEventListener("click",clickHandle);

