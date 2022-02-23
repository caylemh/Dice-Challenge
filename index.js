function rollDice() {
  // First Dice
  let randomDice1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice1);
  document.querySelector("div .img1").setAttribute("src", `./images/dice${randomDice1}.png`);

  // Second Dice
  let randomDice2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice2);
  document.querySelector("div .img2").setAttribute("src", `./images/dice${randomDice2}.png`);

  // Game Logic
  if (randomDice1 > randomDice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.querySelector(".img1").style.border = "4px solid white";
  } else if(randomDice2 > randomDice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector(".img2").style.border = "4px solid white";
  } else if(randomDice1 === randomDice2) {
    document.querySelector("h1").innerHTML = "It's a Draw";
  }
}

// Sleep function
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// sleep(4000);

rollDice();
