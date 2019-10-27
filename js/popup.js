<script>
var link = document.querySelector(".mail-button");

var popup = document.querySelector(".mail");
var close = popup.querySelector(".close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[type=email]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("mail-show");
  name.focus();


  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("mail-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("mail-show")) {
        popup.classList.remove("mail-show");
        popup.classList.remove("modal-error");
      }
    }
  });

  </script>
