const navbar = document.querySelector(".bottom-navbar");
const navItems = navbar.querySelectorAll("li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
