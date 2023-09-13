let buttonElement = document.querySelector(".button");
let bodyElement = document.querySelector(".body");

buttonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("darkBackground");
  bodyElement.classList.contains("darkBackground")
    ? (buttonElement.innerText = "Set light theme")
    : (buttonElement.innerText = "Set dark theme");
});
