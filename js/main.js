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

for(let i = 0, i < songs.length, i++) {
  
}



class Game {
  constructor() {
    this.player = null;
    this.points = 0;
    this.round = 1;
   // this.song = songs[];
  }

  start() {
    const playMusicBtn = document.querySelector(".spotify-button");
    // const pauseMusicBtn = document.querySelector(".spotify-button");

    //playMusicBtn.addEventListener("click", this.playMusic); // invokes play music method
    playMusicBtn.addEventListener("click", this.displaySongInfo); // invokes play music method
    playMusicBtn.addEventListener("click", this.displayAnswers); // invokes play music method

    const answerBtnArr = document.querySelectorAll(".answer-button"); // invokes checkAnswers method
    answerBtnArr.forEach((button) => {
      button.addEventListener("click", this.checkAnswers)
    })

    answerBtnArr.forEach((button) => {
      button.addEventListener("click", (event) => {
        const currentSong = songs[0];
        const correctAnswer = currentSong.correctAnswer;

        if (event.target.innerHTML === 'Yay! Correct answer!') {
          this.updatePoints();
        }
      });
    });

  
  }
 
  

  playMusic() {
    const currentSong = songs[0];
    const audio = new Audio(currentSong.audio);

    audio.play(); 
  }
    
  displaySongInfo() {
    const currentSong = songs[0];
    const songInfo = document.querySelector(".song-info-box"); 
    songInfo.textContent = `Interpret: ${currentSong.interpret} Song: ${currentSong.songTitle}`;
  }

  displayAnswers() {
    const currentSong = songs[0];
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
    const currentSong = songs[0];
    const correctAnswer = currentSong.correctAnswer;
 
    if(event.target.innerHTML === correctAnswer) {
  
      event.target.innerHTML = 'Yay! Correct answer!';
      event.target.style.color = 'green';
      this.points++;

    } else {
      event.target.innerHTML = 'Sorry! Wrong answer!';
      event.target.style.color = 'red';
    }

    }

  updatePoints() {
    this.points++;
  } 

  moveToNextRound() {
    if (this.checkAnswers && this.updatePoints) {
      //start new Round
    }
  }

}

const newGame = new Game();
newGame.start();


// replicating code for all 5 rounds


/*
 function pauseMusic() {
      const audio = new Audio(
        "./songs/01_Scorpions - Rock You Like A Hurricane.mp3"
      );
      audio.pause(); */