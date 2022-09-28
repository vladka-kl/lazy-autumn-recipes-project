// Dropdown Menu
function handleMenuDropdown(element) {
  element.classList.toggle("change");
  const courses = document.getElementById("menu_id");
  if (courses.style.display == "block") {
    courses.style.display = "none";
  } else {
    courses.style.display = "block";
  }
}

// Button to the top 
// Appears after the page has been scrolled down 50px from the top
const toTheTopButton = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTheTopButton.classList.add("active");
  } else {
    toTheTopButton.classList.remove("active");
  }
})