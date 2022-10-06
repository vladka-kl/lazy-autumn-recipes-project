// Dropdown Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// ------TO TOP BUTTON
// Appears after the page has been scrolled 40% down the total height of the page
function handleScroll() {
  const scrollToTopBtn = document.querySelector(".scrollToTop");
  // The total amount of pixels can be scrolled
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (document.documentElement.scrollTop / scrollTotal > 0.4) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
  function scrollToTop() {
    // Scroll to top
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
}
document.addEventListener("scroll", handleScroll);

//-----NEWSLETTER SUBSCRIBTION
//If a user wants to subscribe to the Newsletter pop up a Modal
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".submit-button");
const closeModal = document.querySelector(".close-button");
const emailValid = document.querySelector("#email");
let alertActive = 0;

// opening the modal by clicking on the SUBSCRIBE button
openModal.addEventListener("click", function (event) {
  isEmailAddress(emailValid.value);
  if (isMatching === true) {
    modal.showModal();
    event.preventDefault(); //do not reload the page on submit
    emailValid.value = "";
  } else {
    event.preventDefault();
    insertAlert();
    emailValid.value = "";
  }
});
// closing the modal
closeModal.addEventListener("click", () => {
  modal.close();
});

// email validation
let isMatching;

function isEmailAddress(str) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (str.match(mailformat) !== null) {
    isMatching = true;
  } else {
    isMatching = false;
  }
}

//inline HTML alert if email isn't correct
function insertAlert() {
  if (alertActive === 0) {
    let alertMessage =
      "<div class='alert'>Something doesn't work. Please check the email address again.</div>";
    emailValid.insertAdjacentHTML("afterend", alertMessage);
    alertActive = 1;
    //remove after a few seconds
    setTimeout(function () {
      let alertSection = document.querySelector(".alert");
      alertSection.parentNode.removeChild(alertSection);
      alertActive = 0;
    }, 2000);
  }
}