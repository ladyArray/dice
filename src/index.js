const DICES = [
  {
    button: document.getElementById("button1"),
    dice: document.getElementById("dice1")
  },
  {
    button: document.getElementById("button2"),
    dice: document.getElementById("dice2")
  },
  {
    button: document.getElementById("button3"),
    dice: document.getElementById("dice3")
  },
];
const HISTORY = document.getElementById("history");
const rollHistory = [];

DICES[0].button.addEventListener("click", () => roll(0));
DICES[1].button.addEventListener("click", () => roll(1));
DICES[2].button.addEventListener("click", () => roll(2));

function roll(n) {
  const random = Math.floor(Math.random() * 6) + 1;
  rollHistory.push(random);
  HISTORY.innerHTML = rollHistory;
  DICES[n].dice.src = `public/images/Alea_${random}.png`;
}
