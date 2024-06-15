function openNav() {
    console.log("Open function called"); // Check if function is called
    var navbar = document.getElementById("nav");
    navbar.classList.toggle("active");
}

function closeNav() {
    var navbar = document.getElementById("nav");
    navbar.classList.remove("active");
}