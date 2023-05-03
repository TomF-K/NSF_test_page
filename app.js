// TODO add a mouseover event listener
let eghamButton = document.getElementsByTagName("span")[0];

eghamButton.addEventListener("mouseover", () => {
  eghamButton.textContent = eghamButton.textContent.toUpperCase();
});
