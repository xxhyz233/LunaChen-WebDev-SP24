document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("applyBtn")
    .addEventListener("click", function (event) {
      changeFont(event); // Pass the event object to changeFont
    });
  document
    .getElementById("modeToggle")
    .addEventListener("click", function (event) {
      changeMode(event);
    });
});

function changeFont(event) {
  // Prevents refresh on form submit
  event.preventDefault();

  // Get all the HTML elements
  let container = document.getElementById("container");
  let fontFamily = document.getElementsByName("fontFamily");
  let fontBox = document.getElementById("fontBox");
  let font;
  // Remove all the existing font classes from the container element
  container.classList.remove("sansSerif");
  container.classList.remove("serif");
  container.classList.remove("courier");
  // Loop through the fontFamily array
  for (var i = 0; i < fontFamily.length; i++) {
    // Finding the checked font family item
    if (fontFamily[i].checked) {
      // Setting the font family to our font variable and adding the class to our container
      font = fontFamily[i].value;
      container.classList.add(font);
      break;
    }
  }

  // Adding the selected font family to our text box
  let p1 = document.createElement("P");
  let t1 = document.createTextNode("Your current font family is: " + font);
  p1.appendChild(t1);
  fontBox.appendChild(p1);
}

function changeMode(event) {
  event.preventDefault();
  let modeToggle = document.getElementById("modeToggle");
  let modeContainer = document.getElementById("modeContainer");
  
  if (modeContainer.classList.contains("lightMode")) {  // Light mode
    // Mode
    modeContainer.classList.remove("lightMode");
    modeContainer.classList.add("darkMode");
    // Buttons
    modeToggle.classList.remove("lightButton");
    modeToggle.classList.add("darkButton");
    modeToggle.textContent = "Switch to Light Mode";
  } else {  // Dark mode
    modeContainer.classList.remove("darkMode");
    modeContainer.classList.add("lightMode");
    modeToggle.classList.remove("darkButton");
    modeToggle.classList.add("lightButton");
    modeToggle.textContent = "Switch to Dark Mode";
  }
}
