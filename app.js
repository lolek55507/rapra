const thTextA = document.getElementById('thTextA');
const thTextB = document.getElementById('thTextB');
const inner = document.querySelector(".inner");
const tt = document.querySelector(".tt");
const fullRightContainer = document.querySelector(".fullRightContainer");
const imagAndTextContainer = document.querySelector(".image_And_Text_Container");
const imageContainer = document.querySelector(".image_Container");
let productName = document.getElementById("name");
let productPrice = document.getElementById("thePrice");
let forCheck = "red";
let i = 0;
let s = 0;

function moveText() {
    if(i == 0) {
        thTextA.innerText = "Free Delivery & returns";
        thTextB.innerText = "Nike members get free Delivery and free 30 day returns";
        inner.classList.add("mfl");
        inner.classList.remove("mfr");
        i++;
    }else if (i == 1) {
        thTextA.innerText = "Student Discount";
        thTextB.innerText = "10% off for students.";
        inner.classList.remove("mfl");
        inner.classList.add("mfr");
        i--;
    }
    
}
function showOptions() {
    if (s == 0) {
        tt.style.opacity = "1";
        fullRightContainer.style.opacity = "1";
        s++;
    }else if (s == 1) {
        tt.style.opacity = "0";
        fullRightContainer.style.opacity = "0";
        s--;
    }
}
function moveRight(red, green, blue, tfrn, tfgn, tfbn, tfrp, tfgp, tfbp) {
    if (forCheck == "red") {
        productName.innerText = tfgn;
        productPrice.innerText = tfgp;
        imageContainer.classList.remove(red)
        imageContainer.classList.add(green);
        forCheck = "green";
    } else if (forCheck == "green") {
        productName.innerText = tfbn;
        productPrice.innerText = tfbp;
        imageContainer.classList.remove(green)
        imageContainer.classList.add(blue);
        forCheck = "blue";
    } else if(forCheck == "blue") {
        productName.innerText = tfrn;
        productPrice.innerText = tfrp;
        imageContainer.classList.remove(blue)
        imageContainer.classList.add(red);
        forCheck = "red";
    }
}
function moveLeft(red, green, blue, tfrn, tfgn, tfbn, tfrp, tfgp, tfbp) {
    if (forCheck == "red") {
        productName.innerText = tfbn;
        productPrice.innerText = tfbp;
        imageContainer.classList.remove(red)
        imageContainer.classList.add(blue);
        forCheck = "blue";
    } else if (forCheck == "blue") {
        productName.innerText = tfgn;
        productPrice.innerText = tfgp;
        imageContainer.classList.remove(blue)
        imageContainer.classList.add(green);
        forCheck = "green";
    }   else if(forCheck == "green") {
        productName.innerText = tfrn;
        productPrice.innerText = tfrp;
        imageContainer.classList.remove(green)
        imageContainer.classList.add(red);
        forCheck = "red";
    }
}
setInterval(moveText, 2000);