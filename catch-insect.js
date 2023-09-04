let playGameButton = document.querySelector(".play-game-button");
let insect_button;
let insect_type;

playGameButton.addEventListener('click',() => {
  document.body.innerHTML = `
  <header>
    <title>Catch The Insect</title>
    <link rel="stylesheet" href="catch-insect.css">
  </header>
  <body>
    <div style="text-align: center;margin-top: 15%;">
    <h2 class="game-texts">What is your "favorite" insect</h2>
    <button class="insect-button"" data-insect-type="fly">
        Fly
        <div>
          <img src="fly.png" style="height: 100px;">
        </div>
    </button>
    <button class="insect-button"" data-insect-type="mosquito">
        Mosquioto
        <div>
          <img src="mosquito.png" style="height: 100px;">
        </div>
    </button>
    <button class="insect-button"" data-insect-type="spider">
      Spider
      <div>
        <img src="spider.png" style="height: 100px;">
      </div>
    </button>
    <button class="insect-button"" data-insect-type="roach">
      Roach
      <div>
        <img src="roach.png" style="height: 100px;">
      </div>
    </button>
    </div>
  </body>`;
  insect_button = document.querySelectorAll(".insect-button");
  console.log(insect_button);

  insect_button.forEach( (button) => {
    button.addEventListener('click',() => {
      insect_type = button.dataset.insectType;
      playGame();
    });
  });

});

let minute = 0;
let second = 0;
let timer;
let score = 0;

function playGame() {
  var top = (window.innerHeight-150) * Math.random() + 'px';
  var left = (window.innerWidth-150) * Math.random() + 'px';

  document.body.innerHTML = `
  <header>
    <title>Catch The Insect</title>
    <link rel="stylesheet" href="catch-insect.css">
  </header>
  <body>
    <div style="display: grid;grid-template-columns: 1fr 1fr;;">
    <h3 class="game-texts js-timer">Time: ${formatValue(minute)}:${formatValue(second)}</h3>
    <h3 class="game-texts js-score" style="text-align: end;">Score: ${score}</h3>
    </div>
    <div>
      <button class="js-image" onclick="showAndCalculateScore()">
        <img src= ${insect_type}.png style="height: 150px;position: absolute;top: ${top};left: ${left}">
      </button>
    </div>
  </body>
  `;

  timer = document.querySelector(".js-timer");
  clock();
}

function clock() {
  setInterval(function() {
    if(second >= 59){
      minute+= 1;
      second = 0;
    }
    else{
      second+= 1;
    }

    timer.innerHTML = `
    Time: ${formatValue(minute)}:${formatValue(second)}
    `
  },1000);
}

function formatValue(integer){
  return integer>9 ? integer : "0"+integer;
}


function showAndCalculateScore() {
  score += 1;
  var scoreElement = document.querySelector(".js-score");
  scoreElement.innerHTML = `
  Score: ${score}
  `;

  let game_place = document.body.querySelector(".js-image");
  var top = (window.innerHeight-150) * Math.random() + 'px';
  var left = (window.innerWidth-150) * Math.random() + 'px';

  game_place.innerHTML = `
    <img src= ${insect_type}.png  style="height: 150px;position: absolute;top: ${top};left: ${left}">
  `;

}