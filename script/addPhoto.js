const btn = document.querySelector(".form__btn");
const inputBtn = document.querySelector(".form__input--photo");

btn.addEventListener("click", () => {
  inputBtn.click();
});

inputBtn.addEventListener(
  "change",
  function (e) {
    console.log(inputBtn.files);
  },
  false
);
