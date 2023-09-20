const navbarMenuButton = document.querySelector(".navbar__menu-button");
const navbarOffcanvasCloseButton = document.querySelector(
  ".navbar__offcanvas-close-button"
);
const navbarOffcanvas = document.querySelector(".navbar__offcanvas");
const navbarBackdrop = document.querySelector(".navbar__backdrop");

navbarMenuButton.addEventListener("click", () => {
  navbarOffcanvas.classList.add("visible");
  navbarBackdrop.classList.add("visible");
  navbarBackdrop.style.animation = "reveal .3s ease-in-out forwards";
});

navbarOffcanvasCloseButton.addEventListener("click", hideOffcanvas);

navbarBackdrop.addEventListener("click", hideOffcanvas);

function hideOffcanvas() {
  navbarOffcanvas.classList.add("hiding");
  navbarBackdrop.style.animation = "hiding .3s ease-in-out forwards";
  setTimeout(() => {
    navbarOffcanvas.classList.remove("hiding");
    navbarOffcanvas.classList.remove("visible");
    navbarBackdrop.classList.remove("visible");
  }, 300);
}