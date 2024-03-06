let playButton = document.querySelector(".play-movie")
let video = document.querySelector(".video-cont")
let myVideo = document.getElementById("myvideo")
let closeButton = document.querySelector(".close-video")

playButton.addEventListener("click",function(){
    video.classList.add("video-show")
    myVideo.play()
})
closeButton.addEventListener("click",function(){
    video.classList.remove("video-show")
    myVideo.pause()
})