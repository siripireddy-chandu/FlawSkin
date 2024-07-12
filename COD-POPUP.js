// Get the modal
var modal = document.getElementById("myModal");
// var shedule = document.getElementById("reshedule");
// Get the <span> element that closes the modal
var closebtn1 = document.getElementsByClassName("close1")[0];
// var closebtn2 = document.getElementsByClassName("close2")[0];
// var closebtn2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
closebtn1.onclick = function () {
    modal.style.display = "none";
}
// closebtn2.onclick = function () {
//     shedule.style.display = "none";
// }



// FACE PAGE
var btn1 = document.getElementById("cash1");
var btn2 = document.getElementById("cash2");
var btn3 = document.getElementById("cash3");
var btn4 = document.getElementById("cash4");
var btn5 = document.getElementById("cash5");
var btn6 = document.getElementById("cash6");



btn1.onclick = function () {
    modal.style.display = "flex";
}
btn2.onclick = function () {
    modal.style.display = "flex";
}
btn3.onclick = function () {
    modal.style.display = "flex";
}
btn4.onclick = function () {
    modal.style.display = "flex";
}
btn5.onclick = function () {
    modal.style.display = "flex";
}
btn6.onclick = function () {
    modal.style.display = "flex";
}



// resdhedule fucntions




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// window.onclick = function (event) {
//     if (event.target == shedule) {
//         shedule.style.display = "none";
//     }
// }
