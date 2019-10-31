var link = document.querySelector(".mail-button");
var popupEl = document.querySelector(".mail");
var close = popupEl.querySelector(".close");
var formEl = popupEl.querySelector("formEl");
var nameInput = popupEl.querySelector("[type=text]");
var emailInput = popupEl.querySelector("[type=email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupEl.classList.add("mail-show");
  nameInput.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupEl.classList.remove("mail-show");
  popupEl.classList.remove("modal-error");
});

formEl.addEventListener("submit", function (evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    popupEl.classList.remove("modal-error");
    popupEl.offsetWidth = popupEl.offsetWidth;
    popupEl.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupEl.classList.contains("mail-show")) {
      popupEl.classList.remove("mail-show");
      popupEl.classList.remove("modal-error");
    }
  }
});
