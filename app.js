let buttonElement = document.querySelector(".button");
let bodyElement = document.querySelector(".body");

buttonElement.addEventListener("click", () =>
  bodyElement.classList.toggle("dark")
);
