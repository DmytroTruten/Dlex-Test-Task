const navbarMenuButton = document.querySelector(".navbar__menu-button");
const navbarOffcanvasCloseButton = document.querySelector(
  ".navbar__offcanvas-close-button"
);
const navbarOffcanvas = document.querySelector(".navbar__offcanvas");
const navbarBackdrop = document.querySelector(".navbar__backdrop");

navbarMenuButton.addEventListener("click", () => {
  // Show the offcanvas menu by adding the "visible" class
  navbarOffcanvas.classList.add("visible");

  // Show the backdrop and apply a reveal animation
  navbarBackdrop.classList.add("visible");
  navbarBackdrop.style.animation = "reveal .3s ease-in-out forwards";
});

navbarOffcanvasCloseButton.addEventListener("click", hideOffcanvas);

navbarBackdrop.addEventListener("click", hideOffcanvas);

// Function to hide the offcanvas menu
function hideOffcanvas() {

  // Add a class to animate the hiding of the offcanvas menu
  navbarOffcanvas.classList.add("hiding");

  // Apply a hiding animation to the backdrop
  navbarBackdrop.style.animation = "hiding .3s ease-in-out forwards";

  // Set a timeout to remove the hiding class and hide the elements after the animation
  setTimeout(() => {
    navbarOffcanvas.classList.remove("hiding");
    navbarOffcanvas.classList.remove("visible");
    navbarBackdrop.classList.remove("visible");
  }, 300);
}
