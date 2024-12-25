//INITIALIZE THE VARIABLES
let masterPlay = document.querySelector("#masterPlay");
let progressBar = document.querySelector("#myProgressBar");
let audio = new Audio("./assets/1.mp3");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.querySelectorAll(".songItems"));
let songItemPlay = Array.from(document.querySelectorAll(".songItemPlay"));
let previous = document.querySelector("#previous");
let forward = document.querySelector("#next");
let playedSongName = document.querySelector(".playedSongName");
let singerName = document.querySelector("#singer");

let songIndex = 0;

//SONGS LIST [ARRAY OF OBJECTS]
let songList = [
  {
    songName: "Humsafar",
    filePath: "assets/1.mp3",
    coverImage: "assets/C1.png",
    singer: "Quratullain Baloch",
  },
  {
    songName: "Yaqeen Ka Safar",
    filePath: "assets/2.mp3",
    coverImage: "assets/C2.png",
    singer: "Hadiqa Kiani",
  },
  {
    songName: "Sang E Mah",
    filePath: "assets/3.mp3",
    coverImage: "assets/C3.png",
    singer: "Atif Aslam",
  },
  {
    songName: "HumTum",
    filePath: "assets/4.mp3",
    coverImage: "assets/C4.png",
    singer: "Ali Zafar",
  },
  {
    songName: "Parizaad",
    filePath: "assets/5.mp3",
    coverImage: "assets/C5.png",
    singer: "Asrar Shah",
  },
  {
    songName: "Sinf E Ahan",
    filePath: "assets/6.mp3",
    coverImage: "assets/C6.png",
    singer: "Asim Azhar",
  },
  {
    songName: "Ehd E Wafa",
    filePath: "assets/7.mp3",
    coverImage: "assets/C7.png",
    singer: "Rahat Fateh Ali Khan",
  },
];

//play / pause functionality
  masterPlay.addEventListener("click", () => {
    console.log("master play clicked");
    if (audio.paused || audio.currentTime <= 0) {
      audio.play();
      masterPlay.classList.add("fa-circle-pause");
      masterPlay.classList.remove("fa-circle-play");
      gif.style.opacity = 1;
    } else {
      audio.pause();
      masterPlay.classList.add("fa-circle-play");
      masterPlay.classList.remove("fa-circle-pause");
      gif.style.opacity = 0;
    }
  });

// tracking time update of audio [song]
  audio.addEventListener("timeupdate", () => {
    console.log("time update");
    progress = parseInt((audio.currentTime / audio.duration) * 100);
    progressBar.value = progress;
  });


//progressbar events according to audio [seeking audio]
  progressBar.addEventListener("change", () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
  });

//changing song name , coverImage and song [audio] dynamically
  songItems.forEach((elem, i) => {
    elem.getElementsByTagName("img")[0].src = songList[i].coverImage;
    elem.getElementsByClassName("songName")[0].innerText = songList[i].songName;
  });


//make all play
function makeAllPlays() {
  songItemPlay.forEach((elements) => {
    elements.classList.add("fa-play-circle");
    elements.classList.remove("fa-pause-circle");
  });
}

//make all pause

  songItemPlay.forEach((elements) => {
    elements.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.add("fa-pause-circle");
      e.target.classList.remove("fa-play-circle");
      audio.src = `./assets/${songIndex + 1}.mp3`;
      audio.play();
      audio.currentTime = 0;
      playedSongName.innerText = songList[songIndex].songName;
      singerName.innerText = songList[songIndex].singer;
      masterPlay.classList.add("fa-circle-pause");
      masterPlay.classList.remove("fa-circle-play");
      gif.style.opacity = 1;
    });
  });



// functionality of next button
function next() {
  forward.addEventListener("click", () => {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }

    audio.src = songList[songIndex].filePath;
    playedSongName.innerText = songList[songIndex].songName;
    singerName.innerText = songList[songIndex].singer;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
    gif.style.opacity = 1;
  });
}

//functionality of previous button button
function back() {
  previous.addEventListener("click", () => {
    if (songIndex <= 0) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audio.src = songList[songIndex].filePath;
    playedSongName.innerText = songList[songIndex].songName;
    singerName.innerText = songList[songIndex].singer;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
    gif.style.opacity = 1;
  });
}

next();
back();
