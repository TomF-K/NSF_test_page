// TODO add a mouseover event listener
let eghamButton = document.getElementsByClassName("button-0")[0];

eghamButton.addEventListener("click", (event) => {
  eghamButton.textContent = "EGGS and HAM";
});

// capture email address when email signup button is clicked

const emailSignupButton = document.querySelector(".email-signup__button");
const emailInput = document.querySelector(".email-signup__input");
emailSignupButton.addEventListener("click", function () {
  console.log(emailInput.value);
});
