function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
//   .classList.toggle("open") adds or removes the "open" class from the .menu-links element.
// If the "open" class is not present, it adds it.
// If the "open" class is present, it removes it.

function changetheme () {
  let theme = document.querySelector("body");
  theme.body.style.background = "white";
}

