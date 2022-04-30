const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const open = document.querySelectorAll(".open");

open.forEach(function (element) {
  element.addEventListener("click", function () {
    popup.classList.add("active");
  });
});

close.addEventListener("click", function () {
  popup.classList.remove("active");
});
