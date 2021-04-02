const submitBtn = document.querySelector(".form__input--button");
const progressCover = document.querySelector(
  ".progress-container__line--cover"
);
const progressDot2 = document.querySelector(".progress-container__dots--2");
const progressIcon2 = document.querySelector(".progress-container__icons--2")
  .parentElement;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //PROGRESS BAR
  progressCover.style.width = "45%";
  progressCover.addEventListener("transitionend", () => {
    progressDot2.style = "background-color: #0581aa";
    iconColor = progressIcon2.childNodes[0].childNodes[0];
    iconColor.setAttribute("fill", "#ffffff");
  });
  //FORM 1 VALUES
  const formInputs = document.querySelectorAll(".form__input");
  const formValues = [];
  formInputs.forEach((input) => {
    formValues.push(input.value);
  });
  console.log(formValues);
});
