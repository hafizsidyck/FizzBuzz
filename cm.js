const nombreMystère = Math.floor(Math.random() * 100) + 1;
btn = document.querySelector("button");
p = document.querySelector("p");
let guess = document.getElementById("guess");
let Résultat = document.getElementById("Résultat");
let input = document.querySelector("input"),


//input.focus();

console.log(nombreMystère);

let i = 0;

btn.addEventListener("click", checkInput);

function Devinez() {
  guess = parseInt(input.value);
  input.value = "";
  input.focus();
  console.log(guess);
  if (guess > nombreMystère) {
    Résultat.textContent = "Trop grand";
    i++;
  } else if (guess < nombreMystère) {
    Résultat.textContent = "Trop petit";
  } else {
    Résultat.textContent = "Bravo tu as trouvé au bout de ${i} tentatives, le nombre mystére était ${nombreMystère};";
    input.disabled = true
  }
}
