// When the page is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Get the button to toggle the menu
  const menuBtn = document.querySelector(".menu-btn");

  // Get the navigation menu
  const navMenu = document.querySelector("nav ul");

  // When the button is clicked
  menuBtn.addEventListener("click", function() {
    // Toggle the "open" class on the button
    menuBtn.classList.toggle("open");

    // Toggle the "active" class on the navigation menu
    navMenu.classList.toggle("active");
  });

});
