let button1 = document.getElementById('button1');
let hobby = document.getElementById('hobby');
let categorypicked = document.getElementById('categorypicked');
let link = document.getElementById("link");
let category;

function getCategory(event) {
    console.log(event);
    console.log(event.target.innerHTML);
    category = event.target.innerHTML;
    categorypicked.innerHTML = category;
}

button1.onclick = function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/hobbies?category=' + category,
        headers: { 'X-Api-Key': '8oCaVuoeNKMBYfAAJjjSlQ==yPuW2qxTugzz9EKX' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
            hobby.innerHTML = result.hobby;
            link.href = result.link;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  
  if (!event.target.matches('#dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        
      }
    }
  }
}

