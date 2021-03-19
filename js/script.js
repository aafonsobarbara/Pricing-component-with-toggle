const mySwitch = document.querySelector(".switch");
const switchContainer = document.querySelector(".box-swicth");
const price = document.querySelectorAll(".price");

console.log(price);

switchContainer.addEventListener("click", function () {
  mySwitch.classList.toggle("move");

  if (mySwitch.classList.contains("move")) {
    price[0].textContent = "19.99";
    price[1].textContent = "24.99";
    price[2].textContent = "39.99";
  } else {
    price[0].textContent = "199.99";
    price[1].textContent = "249.99";
    price[2].textContent = "399.99";
  }
});
