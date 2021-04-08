const styleDivs = document.querySelectorAll(".form3__element");
styleDivs.forEach((div) => {
  div.addEventListener("click", () => {
    if (div.classList.contains("form3__element--active")) {
      div.classList.remove("form3__element--active");
    } else {
      styleDivs.forEach((divo) => {
        divo.classList.remove("form3__element--active");
      });
      div.classList.add("form3__element--active");
    }
  });
});

submitBtn2.addEventListener("click", () => {
  const pdfContainer = document.createElement("div");
  pdfContainer.classList.add("pdf-container");
});
