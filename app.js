const suits = ["♦", "♥", "♠", "♣"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomCard() {
  let luckyNumber = Math.floor(Math.random() * 55);
  let randSuit = getRandom(suits);
  let randRank = getRandom(ranks);
  let card = document.getElementById("main-card");
  if (randSuit == "♥" || randSuit == "♦") {
    card.style.color = "red";
  }
  if (randSuit == "♠" || randSuit == "♣") {
    card.style.color = "black";
  }
  if (
    randRank == "J" ||
    randRank == "Q" ||
    randRank == "K" ||
    randRank == "A"
  ) {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">${randRank}</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">${randRank}</h3><h1 class="corner-suit">${randSuit}</h1></div>
    <div class="card-content">
      <div id="big-rank-central-icon"><h1 id="big-rank">${randRank}</h1><h1 id="big-suit">${randSuit}</h1></div>
    </div>`;
  }
  if (randRank == "10") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">10</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">10</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon3">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon4">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon5">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon6">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon9">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon11">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "9") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">9</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">9</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon3">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon4">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon5">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon6">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon10">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "8") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">8</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">8</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon9">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon11">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon12">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon13">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "7") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">7</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">7</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon9">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon12">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon13">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "6") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">6</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">6</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon12">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon13">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "5") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">5</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">5</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon10">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "4") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">4</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">4</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon1">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon2">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon7">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon8">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "3") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">3</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">3</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon14">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon10">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon15">${randSuit}</div>
      </div>
  </div>`;
  }
  if (randRank == "2") {
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank">2</h3><h1 class="corner-suit">${randSuit}</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank">2</h3><h1 class="corner-suit">${randSuit}</h3></div>
      <div class="card-content">
        <div class="central-suit-icon" id="centralIcon14">${randSuit}</div>
        <div class="central-suit-icon" id="centralIcon15">${randSuit}</div>
      </div>
  </div>`;
  }

  if (luckyNumber == 1 || luckyNumber == 2) {
    card.style.color = "black";
    card.innerHTML = `<div class="corner-icon"><h1 class="corner-rank" id="corner-rank-joker">JOKER</h3></div>
    <div class="corner-icon-lr"><h1 class="corner-rank" id="corner-rank-joker">JOKER</h3></div>
    <div class ="card-content">
      <img id="joker-image" src="https://i.kym-cdn.com/photos/images/original/001/613/005/3c4.png">
    </div>`;
  }
}
let autoGen = document.getElementById("autoGenButton");
let stopAutoGen = document.getElementById("stopAutoGenButton");
let Interval;
autoGen.onclick = function() {
  clearInterval(Interval);
  Interval = setInterval(randomCard, 10000);
};

stopAutoGen.onclick = function() {
  clearInterval(Interval);
};
