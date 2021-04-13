const styleDivs = document.querySelectorAll(".form3__element");
const form3Btn = document.querySelector(".form3__submit");
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

form3Btn.addEventListener("click", () => {
  console.log("button");
  const form1Values = [
    "form1",
    "Dane Osobowe",
    `${formValues1[0]} ${formValues1[1]}`,
    `E-mail: ${formValues1[2]}`,
    `Numer: ${formValues1[3]}`,
    `Ulica: ${formValues1[4]}`,
    `Miejscowość: ${formValues1[5]}, ${formValues1[6]}`,
  ];
  //głowna tablica z wszytskimi danymi
  const dataArray = [
    form1Values,
    jobsValues,
    schoolValues,
    langsValues,
    skillsValues,
    hobbiesValues,
  ];
  const pdfContainer = document.createElement("div");
  pdfContainer.classList.add("pdf-container");
  //console.log(dataArray[0]);

  styleDivs.forEach((style) => {
    if (
      style.classList.contains("form3__element--active") &&
      style.classList.contains("form3__element--student")
    ) {
      pdfContainer.classList.add("pdf-container--student");
    } else if (
      style.classList.contains("form3__element--active") &&
      style.classList.contains("form3__element--bussines")
    ) {
      pdfContainer.classList.add("pdf-container--bussines");
    } else if (
      style.classList.contains("form3__element--active") &&
      style.classList.contains("form3__element--classic")
    ) {
      pdfContainer.classList.add("pdf-container--classic");
    }
  });

  const pdfImage = document.querySelector(".imageInput__img");
  pdfImage.classList.remove("imageInput__img");
  pdfImage.classList.add("pdf-container__img");
  pdfContainer.appendChild(pdfImage); // zdjęcie

  let counter = 0;
  dataArray.forEach(function (mainContentPDF) {
    counter++;
    console.log(mainContentPDF.length);
    if (mainContentPDF.length == 2) {
      console.log("nie ma danych");
    } else {
      const mainDiv = document.createElement("div"); //dla każej struktury zrób div
      //console.log(mainContentPDF);
      mainDiv.classList.add(`pdf-container__element`);
      mainDiv.classList.add(`pdf-container__element--${mainContentPDF[0]}`); //dodaj mu klasę i ma sie nazywać jak pierwszy element tablicy ( dodałem w pliku nextForm.js nazwy)
      mainContentPDF.shift();
      //console.log(mainDiv);
      const title = document.createElement("h2");
      title.innerText = mainContentPDF[0];
      title.classList.add("pdf-container__title");
      title.classList.add(`pdf-container__title--${counter}`);
      mainDiv.appendChild(title);
      mainContentPDF.shift(); // po dodaniu klasy usuń ten element żeby nie dodało się jako "p"

      mainContentPDF.forEach(function (elementValue) {
        const element = document.createElement("p");
        element.classList.add("pdf-container__text");
        element.textContent = elementValue; // dodaj do "p" dany element z tablicy
        mainDiv.appendChild(element); // dodaj element do tego danego diva
      });
      pdfContainer.appendChild(mainDiv);
    }
  });

  console.log(pdfContainer);
  const body = document.querySelector("body");
  body.appendChild(pdfContainer);
});
