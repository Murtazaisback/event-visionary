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

// dd