const showRadio = document.getElementById("showRadio");
const hideRadio = document.getElementById("hideRadio");
const myDiv = document.getElementById("sell_fos2");

// Add change event listeners to the radio inputs
showRadio.addEventListener("change", function() {
  if (showRadio.checked) {
    myDiv.style.display = "flex"; // Show the div
  }
});

hideRadio.addEventListener("change", function() {
  if (hideRadio.checked) {
    myDiv.style.display = "none"; // Hide the div
  }
});









// function changeClass() {
//   var element = document.getElementById("myElement");
//   if (element.classList.contains("bxs-chevron-down")) {
//     element.classList.remove("bxs-chevron-down");
//     element.classList.add("bxs-chevron-up");
//   } else {
//     element.classList.remove("bxs-chevron-up");
//     element.classList.add("bxs-chevron-down");
//   }
// }


// function changeClass2() {
//   var element = document.getElementById("myElement2");
//   if (element.classList.contains("bxs-chevron-down")) {
//     element.classList.remove("bxs-chevron-down");
//     element.classList.add("bxs-chevron-up");
//   } else {
//     element.classList.remove("bxs-chevron-up");
//     element.classList.add("bxs-chevron-down");
//   }
// }







// function changePrice(select) {
//   var selectedOption = select.value;
//   var priceElement1 = document.querySelector('.price1');
//   var priceElement2 = document.querySelector('.price2');
//   var pTags = document.querySelectorAll('.pri_plan p');
//   var spanTags = document.querySelectorAll('.pri_plan span');
//   var customOption = document.querySelector('option[value="j"]');
//   var aTag = document.createElement('a');
//   aTag.textContent = 'Contact Us';
//   aTag.setAttribute('href', 'about.html');
//   aTag.setAttribute('class', 'yellow_m');

//   var priPlanDiv = document.querySelector('.pri_plan');

//   if (selectedOption === 'c') {
//       priceElement1.textContent = "$19.99/";
//       priceElement2.textContent = "$24.99";
//       customOption.removeAttribute('disabled');
//       priPlanDiv.classList.remove('flex-container');
//   } else if (selectedOption === 'f') {
//       priceElement1.textContent = "$290.99/";
//       priceElement2.textContent = "$295.99";
//       customOption.removeAttribute('disabled');
//       priPlanDiv.classList.remove('flex-container');
//   } else if (selectedOption === 'g') {
//       priceElement1.textContent = "$251.99/";
//       priceElement2.textContent = "$262.99";
//       customOption.removeAttribute('disabled');
//       priPlanDiv.classList.remove('flex-container');
//   } else if (selectedOption === 'h') {
//       priceElement1.textContent = "$32.99/";
//       priceElement2.textContent = "$27.99";
//       customOption.removeAttribute('disabled');
//       priPlanDiv.classList.remove('flex-container');
//   } else if (selectedOption === 'i') {
//       priceElement1.textContent = "$2333.99/";
//       priceElement2.textContent = "$58.99";
//       customOption.removeAttribute('disabled');
//       priPlanDiv.classList.remove('flex-container');
//   } else if (selectedOption === 'j') {
//       pTags.forEach(function (pTag) {
//           pTag.style.display = 'none';
//       });
//       spanTags.forEach(function (spanTag) {
//           spanTag.style.display = 'none';
//       });
//       customOption.setAttribute('disabled', 'disabled');
//       priPlanDiv.classList.add('flex-container');
//       priPlanDiv.appendChild(aTag);
//   }
// }


// function changePrice(select) {
//   var selectedOption = select.value;
//   var priceElement1 = document.querySelector('.price1');
//   var priceElement2 = document.querySelector('.price2');
//   var pTags = document.querySelectorAll('.pri_plan p');
//   var spanTags = document.querySelectorAll('.pri_plan span');
//   var customOption = document.querySelector('option[value="j"]');
//   var aTag = document.querySelector('.contact-us-text');
//   if (!aTag) {
//       aTag = document.createElement('a');
//       aTag.textContent = 'Contact Us';
//       aTag.setAttribute('href', 'about.html');
//       aTag.setAttribute('class', 'yellow_m');
//   }

//   var priPlanDiv = document.querySelector('.pri_plan');

//   if (selectedOption === 'j') {
//       pTags.forEach(function (pTag) {
//           pTag.style.display = 'none';
//       });
//       spanTags.forEach(function (spanTag) {
//           spanTag.style.display = 'none';
//       });
//       priPlanDiv.classList.add('flex-container');
//       if (!priPlanDiv.contains(aTag)) {
//           priPlanDiv.appendChild(aTag);
//       }
//       customOption.removeAttribute('disabled');
//   } else {
//       pTags.forEach(function (pTag) {
//           pTag.style.display = 'block'; // or whatever the default display is
//       });
//       spanTags.forEach(function (spanTag) {
//           spanTag.style.display = 'inline'; // or whatever the default display is
//       });
//       priPlanDiv.classList.remove('flex-container');
//       if (priPlanDiv.contains(aTag)) {
//           priPlanDiv.removeChild(aTag);
//       }
//   }

//   // Set default values for other options
//   if (selectedOption === 'c') {
//       priceElement1.textContent = "$19.99/";
//       priceElement2.textContent = "$24.99";
//   } else if (selectedOption === 'f') {
//       priceElement1.textContent = "$290.99/";
//       priceElement2.textContent = "$295.99";
//   } else if (selectedOption === 'g') {
//       priceElement1.textContent = "$251.99/";
//       priceElement2.textContent = "$262.99";
//   } else if (selectedOption === 'h') {
//       priceElement1.textContent = "$32.99/";
//       priceElement2.textContent = "$27.99";
//   } else if (selectedOption === 'i') {
//       priceElement1.textContent = "$2333.99/";
//       priceElement2.textContent = "$58.99";
//   }
// }

function changePrice(select) {
  var selectedOption = select.value;
  var priceElement1 = document.querySelector('.price1');
  var priceElement2 = document.querySelector('.price2');
  var pTags = document.querySelectorAll('.pri_plan p');
  var spanTags = document.querySelectorAll('.pri_plan span');
  var customOption = document.querySelector('option[value="j"]');
  var contactUsLink = document.querySelector('.contact-us-link');

  var priPlanDiv = document.querySelector('.pri_plan');

  if (selectedOption === 'j') {
      pTags.forEach(function (pTag) {
          pTag.style.display = 'none';
      });
      spanTags.forEach(function (spanTag) {
          spanTag.style.display = 'none';
      });
      priPlanDiv.classList.add('flex-container');
      if (!contactUsLink) {
          contactUsLink = document.createElement('a');
          contactUsLink.textContent = 'Contact Us';
          contactUsLink.setAttribute('href', 'about.html');
          contactUsLink.setAttribute('class', 'contact-us-link yellow_m');
          priPlanDiv.appendChild(contactUsLink);
      }
      customOption.removeAttribute('disabled');
  } else {
      pTags.forEach(function (pTag) {
          pTag.style.display = 'block'; // or whatever the default display is
      });
      spanTags.forEach(function (spanTag) {
          spanTag.style.display = 'inline'; // or whatever the default display is
      });
      priPlanDiv.classList.remove('flex-container');
      if (contactUsLink) {
          priPlanDiv.removeChild(contactUsLink);
      }
  }

  // Set default values for other options
  if (selectedOption === 'c') {
      priceElement1.textContent = "$18.49/";
      priceElement2.textContent = "$24.95";
  } else if (selectedOption === 'f') {
      priceElement1.textContent = "$29.95/";
      priceElement2.textContent = "$39.95";
  } else if (selectedOption === 'g') {
      priceElement1.textContent = "$54.95/";
      priceElement2.textContent = "$69.95";
  } else if (selectedOption === 'h') {
      priceElement1.textContent = "$99.95/";
      priceElement2.textContent = "$129.95";
  } else if (selectedOption === 'i') {
      priceElement1.textContent = "$199.95/";
      priceElement2.textContent = "$199.95";
  }
  else if (selectedOption === 'a') {
    priceElement1.textContent = "$44.95/";
    priceElement2.textContent = "$54.95";
}
  else if (selectedOption === 'b') {
    priceElement1.textContent = "$59.95/";
    priceElement2.textContent = "$79.95";
}
}
