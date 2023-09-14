let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".body");

buttonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("darkBackground");
  bodyElement.classList.contains("darkBackground")
    ? (buttonElement.innerText = "Set light theme")
    : (buttonElement.innerText = "Set dark theme");
});

let tableButtonElement = document.querySelector(".js-tableButton");
let tableElement = document.querySelector(".section__table");

tableButtonElement.addEventListener("click", () => {
  tableElement.remove();
  tableButtonElement.innerText = "Table disappear!";
});