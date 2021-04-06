const addBtn = document.querySelectorAll(".experience__input--button");
const containerOne = document.querySelector(".experience__container--one");

addBtn.forEach((thisBtn) =>
  thisBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const element = document.createElement("div");
    element.classList.add("element");

    const text = document.createElement("p");
    text.classList.add("element__text");
    const professionValue = document.querySelector("#profession").value;
    const cityValue = document.querySelector("#city").value;
    const companyValue = document.querySelector("#company").value;
    const startValue = document.querySelector("#start").value;
    const endValue = document.querySelector("#end").value;
    const selectValue = document.querySelector("#select").value;

    const delBtn = document.createElement("button");
    delBtn.classList.add("element__button");
    delBtn.innerText = "X";

    text.innerText = `${professionValue == "" ? "" : professionValue}, ${
      companyValue == "" ? "" : companyValue
    } - ${cityValue == "" ? "" : cityValue} ${
      selectValue == "" ? "" : selectValue
    } ${startValue == "" ? "" : startValue} ${endValue == "" ? "" : endValue} `;

    console.log(text);
    element.appendChild(text);
    element.appendChild(delBtn);

    delBtn.addEventListener("click", function () {
      element.remove();
    });

    containerOne.appendChild(element);
  })
);
