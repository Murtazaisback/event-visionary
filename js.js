const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navs-links");
const links = document.querySelectorAll(".navs-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
    


  }





  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






$(document).ready(function(){
    $(".ticket_type_multi").click(function(){
      $(".ticket_form_sec_hide").toggle();
    });
  });

$(document).ready(function(){
    $(".add_ticket_type").click(function(){
      $(".ticket_form_sec_hide").toggle();
    });
  });

// $(document).ready(function(){
//     $(".onee").click(function(){
//       $(".svg_main1").toggle();
//     });
//   });
// $(document).ready(function(){
//     $(".two").click(function(){
//       $(".svg_main2").toggle();
//     });
//   });
// $(document).ready(function(){
//     $(".three").click(function(){
//       $(".svg_main3").toggle();
//     });
//   });
// $(document).ready(function(){
//     $(".four").click(function(){
//       $(".svg_main4").toggle();
//     });
//   });




const teamMember = document.getElementsByClassName("team-member");
const teamMemberInfo = document.getElementsByClassName("team-member-info");
for (let i = 0; i < teamMember.length; i++) {
  teamMember[i].addEventListener("click", function() {
    for (let a = 0; a < teamMemberInfo.length; a++) {
      teamMemberInfo[a].style.display = "none";
    }
    teamMemberInfo[i].style.display = "block";

  });
}








$(function() {
  $("#Sales_tax").on("click",function() {
    $(".tax_inputs").toggle(this.checked);
  });
});












/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
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