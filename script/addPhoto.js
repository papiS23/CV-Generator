const inputBtn = document.querySelector(".imageInput__input--photo");
const img = document.querySelector(".imageInput__img");

inputBtn.addEventListener("change", function () {
  const file = this.files[0]; //pobranie pliku
  console.log(file);

  if (file) {
    //jeżeli jest plik wykonaj
    const reader = new FileReader();
    inputBtn.style.display = "none";
    reader.addEventListener("load", function () {
      img.setAttribute("src", this.result); // dodanie atrybutu src //zamienia zdjecie na base64 string
    });

    reader.readAsDataURL(file); //czytaj jako URL
  }
});
