let textarea = document.querySelector("textarea");

let totalChar1 = document.querySelector("#totalChar");
let totalWord1 = document.querySelector("#totalWords");

textarea.addEventListener("input" , function(){
    let val = this.value

    let totalChar = val.length;
    totalChar1.innerText = totalChar;

    let wordArrays = val.split(" ");
    let cleanWord = wordArrays.filter(function(word){

        return word != ""; 
    })
    totalWord1.innerText = cleanWord.length;

});