const navbar = document.querySelector(".bottom-navbar");
const navItems = navbar.querySelectorAll("li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});


const post = document.querySelector(".post");
const navItem = post.querySelectorAll("li");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navItem.forEach((item) => item.classList.remove("active-two"));
    item.classList.add("active-two");
  });
});
