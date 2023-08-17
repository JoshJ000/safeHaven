let button = document.getElementById("showhide");
let nav = document.getElementById("nav");

button.onclick = function() {
    console.log(nav.style.display);
    if (nav.style.display != "none") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
}