const music = new Audio();

const answerButtons = document.querySelectorAll(".answer-button");

class Game {
  constructor() {
    this.player = null;
    this.points = 0;
  }

  start() {
    const playMusicBtn = document.querySelector(".spotify-button");

    function playMusic() {
      const audio = new Audio(
        "./songs/01_Scorpions - Rock You Like A Hurricane.mp3"
      );
      audio.play();
    }

    playMusicBtn.addEventListener("click", playMusic);
  }
}
/*
const interpretText = document.querySelector("#interpret"); // where to put this function???
    
    function displaySongInfo() {
      const interpret = new Interpret('songs.interpret');
      interpret.textContent();

      */ 

   // document.addEventListener("click", displaySongInfo);  ???? (click on PlayMusicBtn doesnt work)

const newGame = new Game();
newGame.start();

const songs = [
  {
    audio: "./songs/01_Scorpions - Rock You Like A Hurricane.mp3",
    interpret: "Scorpions",
    songTitle: "Rock You Like A Hurricane",
    answer1: "Jani",
    answer2: "Luis",
    answer3: "Nuno",
    answer4: "Ale",
    correctAnswer: "Nuno",
  },
  {
    audio: "./songs/02_Black - Wonderful Life.mp3",
    interpret: "Black",
    songTitle: "Wonderful Life",
    answer1: "Lina",
    answer2: "Solideo",
    answer3: "Mary",
    answer4: "Eirik",
    correctAnswer: "Eirik",
  },
  {
    audio: "./songs/03_Erykah Badu - Didn't Cha Know.mp3",
    interpret: "Erykah Badu",
    songTitle: "Didn't Cha Know",
    answer1: "Joao",
    answer2: "Felipe",
    answer3: "Ola",
    answer4: "Gokce",
    correctAnswer: "Felipe",
  },
  {
    audio: "./songs/04_Ed Sheeran - Shape Of You.mp3",
    interpret: "Ed Sheeran",
    songTitle: "Shape Of You",
    answer1: "Marco",
    answer2: "Maria",
    answer3: "Luis",
    answer4: "Jani",
    correctAnswer: "Luis",
  },
  {
    audio: "./songs/05_The Vandals - 'Don't Stop Me Now'.mp3",
    interpret: "The Vandals",
    songTitle: "Don't Stop Me Now",
    answer1: "Ale",
    answer2: "Djamel",
    answer3: "Philippe",
    answer4: "Emily",
    correctAnswer: "Ale",
  },
];


//updatePoints();