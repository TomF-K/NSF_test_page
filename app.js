// capture email address when email signup button is clicked

const emailSignupButton = document.querySelector(".email-signup__button");
const emailInput = document.querySelector(".email-signup__input");
emailSignupButton.addEventListener("click", function () {
  console.log(emailInput.value);
  alert("thanks for subscribing!");
});
