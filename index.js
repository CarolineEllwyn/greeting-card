
function messageFunction() {
    var message = document.getElementById("textAreaId").value;
    document.getElementById("printedMessage").innerHTML = message;
    console.log(message)
}

function changeBackgroundColor() {
    var dropbox = document.getElementById("comboBackground");
    var selectedColor = dropbox.options[dropbox.selectedIndex].value;
    if (selectedColor === "1") {
        document.getElementById("finalForm").style.backgroundColor = "lightblue";
    }
    else if (selectedColor === "2") {
        document.getElementById("finalForm").style.backgroundColor = "red";
    }
    else if (selectedColor === "3") {
        document.getElementById("finalForm").style.backgroundColor = "grey";
    }
    else if (selectedColor === "") {
        document.getElementById("finalForm").style.backgroundColor = "grey";
    }
    console.log(selectedColor)
}