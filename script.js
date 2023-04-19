//Initialize the variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let nextSong = document.getElementById('next');
let previousSong = document.getElementById('previous');


// songs list
let songs = [
    {songName: "song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "song9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    
]
// forEach() using for Iterate
songItems.forEach((element, i)=> {
   // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
             // seekbar's length changing by automatically                        //condition
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(Progress);
    myProgressBar.value = Progress;
})
  // seekbar's length changing by manually
myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
// make all plays
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    
}
// play by select
songItemPlay.forEach((element) =>{
   element.addEventListener('click',(e)=>{
   // console.log(e.target);
   songIndex = parseInt(e.target.id);
    makeAllPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity= 1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
   })
})
// next song play
nextSong.addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
// previous song play
previousSong.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
