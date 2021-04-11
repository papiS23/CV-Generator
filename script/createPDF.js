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
//głowna tablica z wszytskimi danymi 
const dataArray = [formValues1, jobsValues, schoolValues, langsValues, skillsValues, hobbiesValues];


submitBtn2.addEventListener("click", () => {
  const pdfContainer = document.createElement("div");
  pdfContainer.classList.add("pdf-container");
  //console.log(dataArray[0]);
  
  dataArray.forEach(function(mainContentPDF){
    const mainDiv = document.createElement('div');//dla każej struktury zrób div
    //console.log(mainContentPDF);
    mainDiv.classList.add(`pdf-container__element--${mainContentPDF[0]}`); //dodaj mu klasę i ma sie nazywać jak pierwszy element tablicy ( dodałem w pliku nextForm.js nazwy)
    //console.log(mainDiv);
    mainContentPDF.shift(); // po dodaniu klasy usuń ten element żeby nie dodało się jako "p"

    mainContentPDF.forEach(function(elementValue){
      const element = document.createElement("p"); 
      element.classList.add("pdf-container__text")
      element.textContent = elementValue; // dodaj do "p" dany element z tablicy 
      mainDiv.appendChild(element); // dodaj element do tego danego diva
    })

    pdfContainer.appendChild(mainDiv);
  });

  const pdfImage = document.querySelector('.imageInput__img');
  

  pdfContainer.appendChild(pdfImage); // zdjęcie 
  console.log(pdfContainer);

});


