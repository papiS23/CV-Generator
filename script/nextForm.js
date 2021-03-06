const submitBtn1 = document.querySelector(".form__input--button");
const submitBtn2 = document.querySelector(".experience__submit");
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
const form1Required = document.querySelectorAll(".form__input--required");

//sprawdzenie czy wymagane pola sa wypelnione
form1Required.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      !(
        form1Required[0].value === "" ||
        form1Required[1].value === "" ||
        form1Required[2].value === ""
      )
    ) {
      //jesli sa: odblokowanie przycisku
      submitBtn1.classList.remove("form__input--button--unactive");
      submitBtn1.addEventListener("click", (e) => {
        e.preventDefault();
        //PROGRESS BAR
        progressDot2.classList.remove("progress-container__dots--click-block");
        progressCover.style.width = "45%";
        progressCover.addEventListener("transitionend", () => {
          progressDot2.style = "background-color: #0581aa";
          iconColor = progressIcon2.childNodes[0].childNodes[0];
          iconColor.setAttribute("fill", "#ffffff");
        });
        //FORM SWITCH
        form1.classList.add("form--unactive");
        form2.classList.remove("experience--unactive");
      });
    } else {
      submitBtn1.classList.add("form__input--button--unactive");
    }
  });
});

submitBtn2.addEventListener("click", (e) => {
  //PROGRESS BAR
  progressDot3.classList.remove("progress-container__dots--click-block");
  progressCover.style.width = "95%";
  progressDot3.style = "background-color: #0581aa";
  iconColor3 = progressDot3.childNodes[0].childNodes[0];
  iconColor3.setAttribute("fill", "#ffffff");
  //BUG FIX
  progressCover.addEventListener("transitionend", () => {
    progressDot3.style = "background-color: #0581aa";
    iconColor3 = progressIcon3.childNodes[0].childNodes[0];
    iconColor3.setAttribute("fill", "#ffffff");
  });
  //FORM SWITCH
  form1.classList.add("form--unactive");
  form2.classList.add("experience--unactive");
  form3.classList.remove("form3--unactive");
});

progressDots.forEach((dot) => {
  dot.addEventListener("click", barChange);
});

function barChange() {
  if (this.classList.contains("progress-container__dots--1")) {
    form1.classList.remove("form--unactive");
    form2.classList.add("experience--unactive");
    form3.classList.add("form3--unactive");

    progressCover.style.width = "20%";
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
