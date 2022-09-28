/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementById("myDropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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
