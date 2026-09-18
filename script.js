/* =================================
   LUCAS.DEV
   GAME ENGINE
================================= */

const player = document.getElementById("player");
const star = document.getElementById("star");
const gameScore = document.getElementById("gameScore");
const xpDisplay = document.getElementById("xp");

const restartButton =
  document.getElementById("restartGame");

const startButton =
  document.getElementById("startButton");


/* =================================
   ESTADO
================================= */

let playerPosition = 50;
let score = 0;

const speed = 4;


/* =================================
   MOVIMENTO
================================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowLeft") {

    playerPosition -= speed;

  }

  if (event.key === "ArrowRight") {

    playerPosition += speed;

  }

  playerPosition =
    Math.max(
      4,
      Math.min(96, playerPosition)
    );

  player.style.left =
    `${playerPosition}%`;

  checkCollision();

});


/* =================================
   COLISÃO
================================= */

function checkCollision() {

  if (
    star.classList.contains("collected")
  ) {
    return;
  }

  const playerRect =
    player.getBoundingClientRect();

  const starRect =
    star.getBoundingClientRect();

  const collision =
    playerRect.left <
      starRect.right &&
    playerRect.right >
      starRect.left &&
    playerRect.top <
      starRect.bottom &&
    playerRect.bottom >
      starRect.top;

  if (collision) {

    collectStar();

  }

}


/* =================================
   COLETAR ESTRELA
================================= */

function collectStar() {

  star.classList.add("collected");

  star.style.display = "none";

  score += 100;

  gameScore.textContent = score;

  xpDisplay.textContent =
    String(score).padStart(3, "0");

}


/* =================================
   REINICIAR
================================= */

restartButton.addEventListener(
  "click",
  () => {

    playerPosition = 50;

    score = 0;

    player.style.left = "50%";

    gameScore.textContent = "0";

    xpDisplay.textContent = "000";

    star.classList.remove("collected");

    star.style.display = "block";

  }
);


/* =================================
   BOTÃO INICIAR
================================= */

startButton.addEventListener(
  "click",
  () => {

    document
      .getElementById("sobre")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);
