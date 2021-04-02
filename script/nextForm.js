const submitBtn = document.querySelector(".form__input--button");
const progressCover = document.querySelector(
  ".progress-container__line--cover"
);
const progressDot2 = document.querySelector(".progress-container__dots--2");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //PROGRESS BAR
  progressCover.style.width = "45%";
  progressCover.addEventListener("transitionend", () => {
    progressDot2.style = "background-color: #0581aa";
    // console.log(progressDot2);
  });
});
