const addBtn = document.querySelectorAll(".experience__input--button"); // pobranie przycisków
const containerOne = document.querySelectorAll(".experience__container"); // pobranie kontenera

for (let i = 0; i < addBtn.length; i++) {
  // pętla po ilości przycisków == pętla po sekcjach
  let self = addBtn[i]; // indeks danego przycisku == indeks danej sekcji

  self.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      createBar(i); // wykonaj funkcję z tym danym indeksem
    },
    false
  );
}

function createBar(i) {
  // stworzenie zmiennych
  let professionValue = "";
  let cityValue = "";
  let companyValue = "";
  let startValue = "";
  let endValue = "";
  let selectValue = "";
  // stworzenie tego zielonego paska w którym są wyświetlone informacje
  const element = document.createElement("div");
  element.classList.add("element");
  // stworzenie tekstu
  const text = document.createElement("p");
  text.classList.add("element__text");
  // przycisk usuń
  const delBtn = document.createElement("button");
  delBtn.classList.add("element__button");
  delBtn.innerText = "X";
  //od indeksu zależy jakie wartości zostaną pobrane, wcześniej jak wypełniałeś jakiś form i tam nie było jakiegoś inputa to wywalało bład w konsoli, teraz do każdego forma są przypisane dane zmienne i nie ma błedu
  if (i == 0) {
    professionValue = document.querySelector(`#profession${i}`).value;
    cityValue = document.querySelector(`#city${i}`).value;
    companyValue = document.querySelector(`#company${i}`).value;
    startValue = document.querySelector(`#start${i}`).value;
    endValue = document.querySelector(`#end${i}`).value;
    text.classList.add("element__text--job");
  } else if (i == 1) {
    professionValue = document.querySelector(`#profession${i}`).value;
    cityValue = document.querySelector(`#city${i}`).value;
    companyValue = document.querySelector(`#company${i}`).value;
    startValue = document.querySelector(`#start${i}`).value;
    endValue = document.querySelector(`#end${i}`).value;
    text.classList.add("element__text--school");
  } else if (i == 2) {
    professionValue = document.querySelector(`#profession${i}`).value;
    selectValue = document.querySelector(`#select${i}`).value;
    text.classList.add("element__text--lang");
  } else if (i == 3) {
    professionValue = document.querySelector(`#profession${i}`).value;
    professionValue == ""
      ? (selectValue = "")
      : (selectValue = document.querySelector(`#select${i}`).value);
    text.classList.add("element__text--skill");
  } else if (i == 4) {
    professionValue = document.querySelector(`#profession${i}`).value;
    text.classList.add("element__text--hobby");
  } else {
    console.log("Nie działa");
  }
  // wypisanie zawartości zmiennych do tekstu
  text.innerText = `${professionValue == "" ? "" : professionValue} ${
    companyValue == "" ? "" : "," + companyValue
  } ${cityValue == "" ? "" : "- " + cityValue} ${
    selectValue == "" ? "" : "," + selectValue
  } ${startValue == "" ? "" : startValue} ${endValue == "" ? "" : endValue}`;

  if (text.innerText == "     ") {
  } else {
    //dodanie text i delBtn do tego zielonego elementu
    element.appendChild(text);
    element.appendChild(delBtn);
    // przyciks do usuwania
    delBtn.addEventListener("click", function () {
      element.remove();
    });
    //dodawanie tego zielonego paska do danej sekcji
    containerOne[i].appendChild(element);
  }
}
