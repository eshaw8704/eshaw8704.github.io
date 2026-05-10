alert("Hello, world!");

function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyFancy() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function applyBoring() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    
    text = text.toUpperCase();
    
    var sentences = text.split(".");
    var result = [];
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];
        if (sentence.trim() !== "") {
            result.push(sentence + "-MOO");
        }
    }
    
    textArea.value = result.join(".");
}
