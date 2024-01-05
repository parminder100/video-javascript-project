const switchBtn = document.querySelector(".switch__btn");
const video = document.querySelector(".video__container");

switchBtn.addEventListener('click', function(){
    switchBtn.classList.toggle("slide");
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
})