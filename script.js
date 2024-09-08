console.log("Welcome to Melophile----Where words fail, music speaks....");

//Initialize the variables
let songIndex = 0;
let audioElement= new Audio  ('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgerssBar = document.getElementById('myProgerssBar');
let songs=[
    {songNmae:"Aashayein" , filePath:"song/1.mp3",coverPath:"cover/1.jpg" },
    {songNmae:"Badal Pe Paon Hain" , filePath:"song/2.mp3",coverPath:"cover/2.jpg" },
    {songNmae:"  Phir Se Ud Chala" , filePath:"song/3.mp3",coverPath:"cover/3.jpg" },
    {songNmae:" Chak De India" , filePath:"song/4.mp3",coverPath:"cover4.jpg" },
    {songNmae:" Zinda" , filePath:"song/5.mp3",coverPath:"cover/5.jpg" },  
]
//audioElement.play();


//Handle play/pause click 
masterPlay.addEventListener('click',() =>){
    if(audioElement.paused || audioElement.currentTime<=0){
   audioElement.play()  ;
    }
}


//listen ti events
myProgerssBar.addEventListener('timeupdate',() => {
    console.log("timeupdate");
})
 
    