
function textBigger() {

    let textArea = document.getElementById("myTextArea");

    textArea.style.fontSize = 24 + "px";

    //alert("hello world!");
}

function addStyle() {

    let textArea = document.getElementById("myTextArea");

    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";

    //alert("falling with style!");
}

function removeStyle() {

    let textArea = document.getElementById("myTextArea");

    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";

    //alert("falling");
}

function moo() {
    let textArea = document.getElementById("myTextArea");

    textArea.value = textArea.value.toUpperCase();

    var chars = textArea.value.split("");
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] == ".") {
            chars[i] = chars[i] + "-Moo";
        }
    }

    textArea.value = chars.join("");

}