// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", handleResetEnter);

// Funções
function handleTryClick(event) {
  event.preventDefault(); // não faça o padrão / não envie o formulário

  let inputNumber = document.querySelector("#inputNumber");

  if (randomNumber == inputNumber.value) {
    toggleScreen();

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`;
  } else {
    alert("Você errou, tente novamente!");
  }

  inputNumber.value = "";

  xAttempts++;
}

function handleResetClick(event) {
  toggleScreen();

  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function handleResetEnter(event) {
  if (event.key === "Enter" && !screen2.className.includes("hide")) {
    handleResetClick();
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
