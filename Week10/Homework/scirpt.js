document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners
  // Declare and assign HTML elements to JS variables
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
  // Stop the page from refreshing when we click submit form
  event.preventDefault();

  let container = document.getElementById("container");
  let fontFamily = document.getElementsByName("fontFamily");
  let font;
  let fontBox = document.getElementById("fontBox");

  container.classList.remove("sansSerif");
  container.classList.remove("serif");
  container.classList.remove("courier");

  for (var i = 0; i < fontFamily.length; i++) {
    if (fontFamily[i].checked) {
      font = fontFamily[i].value;
      console.log(font);
      container.classList.add(font);
      break;
    }
  }

  // Spit out our bill and information with createElement and createTextNode
  let p1 = document.createElement("P");
  let t1 = document.createTextNode("Your current font family is: " + font);
  p1.appendChild(t1);
  fontBox.appendChild(p1);
}

function changeMode(event) {
  event.preventDefault();
  let modeToggle = document.getElementById("modeToggle");
  let container = document.getElementById("modeContainer");

  if (container.classList.contains("lightMode")) {
    container.classList.remove("lightMode");
    container.classList.add("darkMode");
    modeToggle.classList.remove("lightButton");
    modeToggle.classList.add("darkButton");
    modeToggle.textContent = "Switch to Light Mode";
  } else {
    container.classList.remove("darkMode");
    container.classList.add("lightMode");
    modeToggle.classList.remove("darkButton");
    modeToggle.classList.add("lightButton");
    modeToggle.textContent = "Switch to Dark Mode";
  }
}
