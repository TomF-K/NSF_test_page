// capture email address when email signup button is clicked

const emailSignupButton = document.querySelector(".email-signup__button");
const emailInput = document.querySelector(".email-signup__input");
emailSignupButton.addEventListener("click", function () {
  const dynamicText = document.querySelector("#dynamic-text");
  dynamicText.textContent = `Thanks for signing up, ${emailInput.value}`; 
});


// event listener for form rather than button, onsubmit event

