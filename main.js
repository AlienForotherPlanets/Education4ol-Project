function upi() {
    let amount = document.getElementById("amount").value;
    let discription = document.getElementById("desctiption").value;
    let result = true;
    if (amount == "") {
        document.getElementById("wrong_amount").style.display = "block";
        result = false;
    } else {
        document.getElementById("wrong_amount").style.display = "none";
    }
    if (discription == "") {
        console.log("description is not there");
        document.getElementById("wrong_description").style.display = "block";
        result = false;
    } else {
        console.log("description is there");
        document.getElementById("wrong_description").style.display = "none";
    }

    if (result == true) {
        window.location.href = "upi.html";
    }
}
function bank() {
    let amount = document.getElementById("amount").value;
    let discription = document.getElementById("desctiption").value;
    let result = true;
    if (amount == "") {
        document.getElementById("wrong_amount").style.display = "block";
        result = false;
    } else {
        document.getElementById("wrong_amount").style.display = "none";
    }
    if (discription == "") {
        console.log("description is not there");
        document.getElementById("wrong_description").style.display = "block";
        result = false;
    } else {
        console.log("description is there");
        document.getElementById("wrong_description").style.display = "none";
    }

    if (result == true) {
        window.location.href = "bank.html";
    }
}
function varify() {
    let amount = document.getElementById("amount").value;
    let discription = document.getElementById("desctiption").value;
    let result = true;
    if (amount == "") {
        document.getElementById("wrong_amount").style.display = "block";
        result = false;
    } else {
        document.getElementById("wrong_amount").style.display = "none";
    }
    if (discription == "") {
        console.log("description is not there");
        document.getElementById("wrong_description").style.display = "block";
        result = false;
    } else {
        console.log("description is there");
        document.getElementById("wrong_description").style.display = "none";
    }

    if (result == true) {
        window.location.href = "varify.html";
    }
}
