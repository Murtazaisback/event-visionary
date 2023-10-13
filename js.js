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










$(document).ready(function(){
    $(".top-1").click(function(){
      $(".bot-1").toggle();
    });
  });


$(document).ready(function(){
    $(".top-2").click(function(){
      $(".bot-2").toggle();
    });
  });

// $(document).ready(function(){
//     $(".add_ticket_type").click(function(){
//       $(".ticket_form_sec_hide").toggle();
//     });
//   });



  
  $('input:checkbox').click(function(){

    var id = ($(this).attr('id'));
 
    // alert(id)
 
     var $inputs = $("#id")
 
         if($(this).is(':checked')){
 
             // $("."+id).prop('disabled', true); // <-- disable all but checked one
 
              $("."+id).not(this).prop('disabled',true);
 
         }else{
 
            // $inputs.prop('disabled',false); // <--
 
            $("."+id).prop('disabled', false);
 
         }
 
     })







    //  $(document).ready(function () { 
    //   $("#watch-me").click(function() {
    //    $("#show-me:hidden").show('slow');
    //    });
    //    $("#watch-me").click(function(){
    //    if($('watch-me').prop('checked')===false) {
    //       $('#show-me').hide();}
    //       });
    //   });

    const checkbox = document.getElementById('watch-me');

    const box = document.getElementById('show-me');
    
    checkbox.addEventListener('click', function handleClick() {
      if (checkbox.checked) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });

    
    const checkbox2 = document.getElementById('huey');

    const box2 = document.getElementById('show-me');
    
    checkbox2.addEventListener('click', function handleClick() {
      if (checkbox2.checked) {
        box2.style.display = 'none';
      }
    });




  















    // ----------------------main-------------check
    const mainop = document.getElementById('watch-main');

    const mainsh = document.getElementById('show-main');
    
    mainop.addEventListener('click', function handleClick() {
      if (mainop.checked) {
        mainsh.style.display = 'block';
      } else {
        mainsh.style.display = 'none';
      }
    });



    const mainop2 = document.getElementById('watch-mainn');

    const mainsh2 = document.getElementById('show-main');
    
    mainop2.addEventListener('click', function handleClick() {
      if (mainop2.checked) {
        mainsh2.style.display = 'none';
      }
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







// Get references to the input element and the button
const inputElements  = document.querySelectorAll(".myInput2");
const toggleButton = document.getElementById("toggleButton2");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
  // Loop through the input elements and toggle their disabled state
  inputElements.forEach(function(inputElement) {
    inputElement.disabled = !inputElement.disabled;
  });
  
 
});
const inputElements2  = document.querySelectorAll(".myInput3");
const toggleButton2 = document.getElementById("toggleButton3");

// Add a click event listener to the button
toggleButton2.addEventListener("click", function() {
  // Loop through the input elements and toggle their disabled state
  inputElements2.forEach(function(inputElement2) {
    inputElement2.disabled = !inputElement2.disabled;
  });
  
 
});


function btnss() {
  var x = document.getElementById("myDiv2");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
function btnss2() {
  var x = document.getElementById("myDiv3");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}









var divToHide = document.getElementById("ds");
var toggleButton6 = document.getElementById("Multi-Level-btn");
var iconElement = document.getElementById("Multi-Level-btn");

// Set an initial flag to track visibility
var isHidden = false;

// Add an onclick event handler to the toggleButton
toggleButton6.onclick = function() {
  // Toggle the visibility based on the current state
  if (isHidden) {
    divToHide.style.visibility = "visible";
  } else {
    divToHide.style.visibility = "hidden";
  }

  // function toggleIcon() {
  
    // Check if the current class is "fa-chevron-down"
    // bx-chevron-up
    if (iconElement.classList.contains("bx-chevron-up")) {
      // Change to "fa-chevron-up"
      iconElement.classList.remove("bx-chevron-up");
      iconElement.classList.add("bx-chevron-down");
    } else {
      // Change back to "bx-chevron-down"
      iconElement.classList.remove("bx-chevron-down");
      iconElement.classList.add("bx-chevron-up");
    }
    // }
    
    
    // Update the flag
    isHidden = !isHidden;
  };

  var divToHide2 = document.getElementById("ds2");
  var toggleButton7 = document.getElementById("Multi-Level-btn2");
  var iconElement2 = document.getElementById("Multi-Level-btn2");
  
  // Set an initial flag to track visibility
  var isHidden = false;

  // Add an onclick event handler to the toggleButton
  toggleButton7.onclick = function() {
    // Toggle the visibility based on the current state
  if (isHidden) {
    divToHide2.style.visibility = "visible";
  } else {
    divToHide2.style.visibility = "hidden";
  }

  if (iconElement2.classList.contains("bx-chevron-up")) {
    // Change to "fa-chevron-up"
    iconElement2.classList.remove("bx-chevron-up");
    iconElement2.classList.add("bx-chevron-down");
} else {
    // Change back to "bx-chevron-down"
    iconElement2.classList.remove("bx-chevron-down");
    iconElement2.classList.add("bx-chevron-up");
}
  
  // Update the flag
  isHidden = !isHidden;
};



// alert("c")













// function toggleClass() {
//   $("#Multi-Level-btn").toggleClass("bx-chevrons-down bx-chevrons-up");
// }

// alert("nh")






