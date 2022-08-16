console.log('welcome to spotify');
let songIndex =0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'))

let songs= [
    {songname: "Aankho se Batana" , filepath : "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Alag Aasmaan" , filepath : "songs/2.mp3", coverpath: "covers/3.jpg"},
    {songname: "Death Bed" , filepath : "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "Gul" , filepath : "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Insane" , filepath : "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "Perfect" , filepath : "songs/6.mp3", coverpath: "covers/6.jpeg"},
    {songname: "Apricot - Raat" , filepath : "songs/7.mp3", coverpath: "covers/7.jpeg"},
    {songname: "Saware" , filepath : "songs/8.mp3", coverpath: "covers/8.jpeg"},
    {songname: "Tu aake dekh le" , filepath : "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songname: "Waqt Ki Baatein" , filepath : "songs/10.mp3", coverpath: "covers/10.jpeg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0; 
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audioElement,currentTime= progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songname;
        audioElement.currentTime =0;
        audioElement.opacity = 1;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})