let songIndex =0;
let audioElement = new Audio('1.mp3');  
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let mygif= document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "cover.jpg"},
    {songName: "Ishq", filepath: "songs/2.mp3", coverPath: "cover.jpg"},
    {songName: "Kl ho n ho", filepath: "songs/3.mp3", coverPath: "cover.jpg"},
    {songName: "Tumhari ksm", filepath: "songs/4.mp3", coverPath: "cover.jpg"},
    {songName: "Rabba", filepath: "songs/5.mp3", coverPath: "cover.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName; 
})

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{

// udate seekbar
progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click', (e)=>{
         
         makeAllPlays();
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src='songs/3.mp3';
         audioElement.currentTime=0;
         audioElement.play();
    })
    })

