const checkbox = document.querySelector(".input__checkbox");
const body = document.querySelector("body");

checkbox.addEventListener("change", function (e) {
  if (e.target.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
