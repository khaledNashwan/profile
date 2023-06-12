const post = document.querySelector(".post");
const navItem = post.querySelectorAll("li");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navItem.forEach((item) => item.classList.remove("active-two"));
    item.classList.add("active-two");
  });
});

const navbar = document.querySelector(".bottom-navbar");
const navItems = navbar.querySelectorAll("li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

function showContent1() {
  document.getElementById("content1").style.display = "block";
  document.getElementById("content2").style.display = "none";
}
function showContent2() {
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "block";
}
