let myClassElements = document.querySelectorAll(".myClass");

myClassElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    element.style.borderLeft = "4.5px solid #f1786b";
  });
});

document.addEventListener("click", () => {
  myClassElements.forEach((element) => {
    element.style.borderLeft = "";
  });
});

document.getElementById("image-up").addEventListener("change", function () {
  var fileName = this.files.length ? this.files[0].name : "No file chosen";
  document.querySelector(".file-name").textContent = fileName;
});
