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
const btnArr = document.querySelectorAll(".answer-button");
class Game {
  constructor() {
    this.player = null;
    this.audio = null;
    this.points = 0;
    this.round = 1;
    this.song = songs[0];
    this.answerChecked = false;
    this.pointsUpdated = false;
  }

  start() {
    const playMusicBtn = document.querySelector(".spotify-button");
    // const pauseMusicBtn = document.querySelector(".spotify-button");

    playMusicBtn.addEventListener("click", () => this.playMusic()); // invokes play music method
    playMusicBtn.addEventListener("click", () => this.displaySongNumber()); // invokes play music method
    playMusicBtn.addEventListener("click", () => this.displayPlayerPoints()); // invokes play music method

    playMusicBtn.addEventListener("click", () => this.displaySongInfo()); // invokes play music method
    playMusicBtn.addEventListener("click", () => this.displayAnswers()); // invokes play music method

    const answerBtnArr = document.querySelectorAll(".answer-button"); // invokes checkAnswers method
    answerBtnArr.forEach((button) => {
      button.addEventListener("click", (event) => {
        this.checkAnswers(event);
        // this.stopMusic() //stops music
      });
    });
  }

  playMusic() {
    const currentSong = this.song;
    this.audio = new Audio(currentSong.audio);
    this.audio.play();

    //this.audio.volume = 0;
  }

  displaySongNumber() {
    const currentSong = this.song;
    const songNumber = document.querySelector("#song-number");
    songNumber.textContent = `Song ${this.round} / 5`;
  }

  displayPlayerPoints() {
    const currentSong = this.song;
    const playerPoints = document.querySelector("#player-points");
    playerPoints.textContent = `Points: ${this.points}`;
  }

  displaySongInfo() {
    console.log(this.song);
    const currentSong = this.song;
    const songInfo = document.querySelector(".song-info-box");
    songInfo.textContent = `Interpret: ${currentSong.interpret} Song: ${currentSong.songTitle}`;
  }

  displayAnswers() {
    const currentSong = this.song;
    const answerOption1 = document.querySelector("#answer1");
    const answerOption2 = document.querySelector("#answer2");
    const answerOption3 = document.querySelector("#answer3");
    const answerOption4 = document.querySelector("#answer4");

    answerOption1.innerText = `${currentSong.answer1}`;
    answerOption2.innerText = `${currentSong.answer2}`;
    answerOption3.innerText = `${currentSong.answer3}`;
    answerOption4.innerText = `${currentSong.answer4}`;
  }

  checkAnswers(event) {
    let userAnswer = "";
    let isButton = false;
    const currentSong = this.song;

    if (event.target.classList[0] === "answer-button") {
      isButton = true;
      userAnswer = event.target.children[0].innerText;
    } else if (event.target.id.slice(0, 6) === "answer") {
      userAnswer = event.target.innerText;
    }

    btnArr.forEach((btn) => {
      btn.disabled = true; // disable button after one click
    });
    console.log(event);

    if (userAnswer === currentSong.correctAnswer) {

      if (isButton) {
        event.target.children[0].innerText = "Yay! Correct answer!";
        event.target.children[0].style.color = "beige";
        event.target.style.backgroundColor = "green";
      } else {
        event.target.innerText = "Yay! Correct answer!";
        event.target.style.color = "beige";
        event.target.parentNode.style.backgroundColor = "green";
      }

      this.updatePoints();
    } else {
      if(isButton){
        event.target.children[0].innerText = "Sorry! Wrong answer";
        event.target.children[0].style.color = "beige";
        event.target.style.backgroundColor = "red";
      }else{
           event.target.innerText = "Sorry! Wrong answer!";
      event.target.style.color = "beige";
      event.target.parentNode.style.backgroundColor = "red";
      }
   

    }

    this.answerChecked = true;

    setTimeout(() => {
     if(isButton){
      event.target.style.backgroundColor = "";
     }else{
      event.target.parentNode.style.backgroundColor = ""
     }
      this.stopMusic();
      this.startNextRound();
    }, 4000);
  }

  updatePoints() {
    this.points++;
    this.pointsUpdated = true;
  }

  stopMusic() {
    // const currentSong = this.song;
    // this.audio = new Audio(currentSong.audio);
    this.audio.pause();
    //this.audio = this.song;
  }

  startNextRound() {
    if (this.answerChecked === true) {
      if (this.round < songs.length) {
        console.log("hello inside next round");
        this.round++;
        this.stopMusic();
        this.song = songs[this.round - 1];
        this.displaySongNumber();
        this.displayPlayerPoints();
        this.displaySongInfo();
        this.displayAnswers();
        // this.checkAnswers();
        // this.playMusic();
        btnArr.forEach((btn) => {
          btn.disabled = false; // disable button after one click
        });
        // button.disabled = false;
        // button.innerText = "";
        // button.style.color = "";
        // button.style.backgroundColor = "";
      } else {
        this.showResult();
      }
    }
    this.answerChecked = false;
    this.pointsUpdated = false;
  }

  showResult() {
    console.log("Game Over");
  }
}

const newGame = new Game(songs);
newGame.start();

// replicating code for all 5 rounds

/*
 function pauseMusic() {
      const audio = new Audio(
        "./songs/01_Scorpions - Rock You Like A Hurricane.mp3"
      );
      audio.pause(); */
