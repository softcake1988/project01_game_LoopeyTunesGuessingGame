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

class Game {
  constructor() {
    this.player = null;
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
      button.addEventListener("click", (event) => this.checkAnswers(event));
      button.addEventListener("click", () => this.stopMusic());
    })
   //invokes stop music method
 
  };

  playMusic() {
    const currentSong = this.song;
    const audio = new Audio(currentSong.audio);
    audio.play(); 
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


    answerOption1.textContent = `${currentSong.answer1}`;
    answerOption2.textContent = `${currentSong.answer2}`;
    answerOption3.textContent = `${currentSong.answer3}`;
    answerOption4.textContent = `${currentSong.answer4}`;

  }

  checkAnswers(event) {
    let userAnswer = "";
    const currentSong = this.song;
    
    if(event.target.classList[0] === "answer-button"){
      userAnswer = event.target.children[0].innerText;
    }
      userAnswer = event.target.innerText;
    
    const btnArr = document.querySelectorAll(".answer-button").forEach((btn) => {
      btn.disabled = true; // disable button after one click
    })


    if(userAnswer === currentSong.correctAnswer) {
  
      event.target.innerText = 'Yay! Correct answer!';
      event.target.style.color = 'beige';
      event.target.style.backgroundColor = 'green';
      this.updatePoints();

    } else {
      event.target.innerText = 'Sorry! Wrong answer!';
      event.target.style.color = 'beige';
      event.target.style.backgroundColor = 'red';
    }
    this.answerChecked = true;

    setTimeout(() => {
      console.log('timeout');
      this.startNextRound();
     }, 4000);

     stopMusic(() => {
      const currentSong = this.song;
      const audio = new Audio(currentSong.audio);
      audio.pause();
      audio.currentTime = 0;
     });
    
    }

  updatePoints() {
    this.points++;
    this.pointsUpdated = true;

  } 

  startNextRound() {
    if (this.answerChecked === true && this.pointsUpdated === true) {
    
      if (this.round < songs.length) {
      this.round++;
      this.stopMusic();
      this.song = songs[this.round - 1];
      this.displaySongNumber();
      this.displayPlayerPoints();
      this.displaySongInfo();
      this.displayAnswers();
      this.playMusic();
      btn.disabled = false;
      button.innerText = ""; 
      button.style.color = "";
      button.style.backgroundColor = "";
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