let johary = document.getElementById("johary");
let josh = document.getElementById("josh");
let byamungu = document.getElementById("byamungu");
let jayvon = document.getElementById("jayvon");

let johary_info = document.getElementById("johary_info");
let josh_info = document.getElementById("josh_info");
let byamungu_info = document.getElementById("byamungu_info");
let jayvon_info = document.getElementById("jayvon_info");

johary.onclick = function() {
    johary_info.classList.add("show");
    josh_info.classList.remove("show");
    byamungu_info.classList.remove("show");
    jayvon_info.classList.remove("show");
    
    johary.classList.add("select");
    josh.classList.remove("select");
    byamungu.classList.remove("select");
    jayvon.classList.remove("select");
}

josh.onclick = function() {
    johary_info.classList.remove("show");
    josh_info.classList.add("show");
    byamungu_info.classList.remove("show");
    jayvon_info.classList.remove("show");

    johary.classList.remove("select");
    josh.classList.add("select");
    byamungu.classList.remove("select");
    jayvon.classList.remove("select");
}


byamungu.onclick = function() {
    johary_info.classList.remove("show");
    byamungu_info.classList.add("show");
    josh_info.classList.remove("show");
    jayvon_info.classList.remove("show");

    johary.classList.remove("select");
    josh.classList.remove("select");
    byamungu.classList.add("select");
    jayvon.classList.remove("select");
}

jayvon.onclick = function() {
    johary_info.classList.remove("show");
    jayvon_info.classList.add("show");
    josh_info.classList.remove("show");
    byamungu_info.classList.remove("show");

    johary.classList.remove("select");
    josh.classList.remove("select");
    byamungu.classList.remove("select");
    jayvon.classList.add("select");
}

