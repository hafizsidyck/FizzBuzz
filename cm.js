const input = document.querySelector("input"),
  p = document.querySelector("p"),
  myst = document.querySelector("#myst"),
  btn = document.querySelector("button");
let randNumber = Math.floor(Math.random() * 100) + 1;

input.focus();
console.log(randNumber);
let i = 0;

btn.addEventListener("click", checkInput);
// Fonctions
function checkInput(){
    guess = parseInt(input.value);
    input.value = "";
    input.focus();
    console.log(guess);
    if (guess > randNumber) {
      p.textContent = "Trop haut";
      i++;
    } else if (guess < randNumber) {
      p.textContent = "Trop Bas";
      i++;
    } else {
      p.textContent = Bravo tu as trouvé au bout de ${i} tentatives, le nombre mystére était ${randNumber};
      input.disabled = true;
    }
}
