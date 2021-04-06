const addBtn = document.querySelectorAll(".experience__input--button");
const containerOne = document.querySelectorAll(".experience__container");

for (let i = 0; i < addBtn.length; i++) {
  let self = addBtn[i];

  self.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      createBar(i);
    },
    false
  );
}

function createBar(i) {
  const element = document.createElement("div");
  element.classList.add("element");

  console.log(i);
  console.log(containerOne);

  const text = document.createElement("p");
  text.classList.add("element__text");
  const professionValue = document.querySelectorAll(
    ".experience__input--profession"
  ).value;
  const cityValue = document.querySelectorAll(".experience__input--city").value;
  const companyValue = document.querySelectorAll(".experience__input--company")
    .value;
  const startValue = document.querySelectorAll(".experience__input--start")
    .value;
  const endValue = document.querySelectorAll(".experience__input--end").value;
  const selectValue = document.querySelectorAll(".experience__input--select")
    .value;

  const delBtn = document.createElement("button");
  delBtn.classList.add("element__button");
  delBtn.innerText = "X";

  text.innerText = `${professionValue[i] == "" ? "" : professionValue[i]}, ${
    companyValue[i] == "" ? "" : companyValue[i]
  } - ${cityValue[i] == "" ? "" : cityValue[i]} ${
    selectValue[i] == "" ? "" : selectValue[i]
  } ${startValue[i] == "" ? "" : startValue[i]} ${
    endValue[i] == "" ? "" : endValue[i]
  } `;

  console.log(text);
  element.appendChild(text);
  element.appendChild(delBtn);

  delBtn.addEventListener("click", function () {
    element.remove();
  });

  containerOne[i].appendChild(element);
}
