function handleMenuDropdown(element) {
  element.classList.toggle("change");
  const courses = document.getElementById("menu_id");
  if (courses.style.display == "block") {
    courses.style.display = "none";
  } else {
    courses.style.display = "block";
  }
}
