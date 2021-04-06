const submitBtn1 = document.querySelector(".form__input--button");
const progressCover = document.querySelector(
  ".progress-container__line--cover"
);
const progressDot2 = document.querySelector(".progress-container__dots--2");
const progressIcon2 = document.querySelector(".progress-container__icons--2")
  .parentElement;
const progressDot3 = document.querySelector(".progress-container__dots--3");
const progressIcon3 = document.querySelector(".progress-container__icons--3")
  .parentElement;
const form1 = document.querySelector(".form");
const form2 = document.querySelector(".experience");
const form3 = document.querySelector(".form3");
const progressDots = document.querySelectorAll(".progress-container__dots");

submitBtn1.addEventListener("click", (e) => {
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
  //FORM SWITCH
  form1.classList.add("form--unactive");
  form2.classList.remove("experience--unactive");
});

progressDots.forEach((dot) => {
  dot.addEventListener("click", barChange);
});

function barChange() {
  if (this.classList.contains("progress-container__dots--1")) {
    form1.classList.remove("form--unactive");
    form2.classList.add("experience--unactive");
    form3.classList.add("form3--unactive");

    progressCover.style.width = "25%";
    progressDot2.style = "background-color: #c0bdbd";
    iconColor2 = progressIcon2.childNodes[0].childNodes[0];
    iconColor2.setAttribute("fill", "#000000");
    progressDot3.style = "background-color: #c0bdbd";
    iconColor3 = progressIcon3.childNodes[0].childNodes[0];
    iconColor3.setAttribute("fill", "#000000");
    //BUG FIX
    progressCover.addEventListener("transitionend", () => {
      progressDot2.style = "background-color: #c0bdbd";
      iconColor = progressIcon2.childNodes[0].childNodes[0];
      iconColor.setAttribute("fill", "#000000");
      progressDot3.style = "background-color: #c0bdbd";
      iconColor3 = progressIcon3.childNodes[0].childNodes[0];
      iconColor3.setAttribute("fill", "#000000");
    });
  } else if (this.classList.contains("progress-container__dots--2")) {
    form1.classList.add("form--unactive");
    form2.classList.remove("experience--unactive");
    form3.classList.add("form3--unactive");

    progressCover.style.width = "45%";
    progressDot3.style = "background-color: #c0bdbd";
    iconColor3 = progressIcon3.childNodes[0].childNodes[0];
    iconColor3.setAttribute("fill", "#000000");
    progressCover.addEventListener("transitionend", () => {
      progressDot2.style = "background-color: #0581aa";
      iconColor = progressIcon2.childNodes[0].childNodes[0];
      iconColor.setAttribute("fill", "#ffffff");
      //BUG FIX
      progressDot3.style = "background-color: #c0bdbd";
      iconColor3 = progressIcon3.childNodes[0].childNodes[0];
      iconColor3.setAttribute("fill", "#000000");
    });
  } else if (this.classList.contains("progress-container__dots--3")) {
    form1.classList.add("form--unactive");
    form2.classList.add("experience--unactive");
    form3.classList.remove("form3--unactive");

    progressCover.style.width = "95%";
    progressDot2.style = "background-color: #0581aa";
    iconColor2 = progressIcon2.childNodes[0].childNodes[0];
    iconColor2.setAttribute("fill", "#ffffff");
    progressCover.addEventListener("transitionend", () => {
      progressDot3.style = "background-color: #0581aa";
      iconColor = progressIcon3.childNodes[0].childNodes[0];
      iconColor.setAttribute("fill", "#ffffff");
      //BUG FIX
      progressDot2.style = "background-color: #0581aa";
      iconColor = progressIcon2.childNodes[0].childNodes[0];
      iconColor.setAttribute("fill", "#ffffff");
    });
  }
}
