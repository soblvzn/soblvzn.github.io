let spoti = document.querySelector("#spoti")
let tg = document.querySelector("#tg")
let github = document.querySelector("#git")

let logo = document.querySelector("#main-logo")
let video = document.querySelector("#video")

spoti.addEventListener('click', ()=> {
    window.open("https://open.spotify.com/user/31pn2mvks2k4de3aki7shwq6g334", "_blank")
})

tg.addEventListener('click', ()=> {
    window.open("https://t.me/soblvzn", "_blank")
})

github.addEventListener('click', ()=> {
    window.open("https://github.com/soblvzn", "_blank")
})

logo.addEventListener('click', ()=>{

    if (video.ended == true || video.currentTime == 0) {
        video.classList.remove("hide")
        video.currentTime = 75
        video.play()
    }
})

video.addEventListener('ended', ()=>{
    video.classList.add("hide")
});

const curs = document.querySelector(".cursor")
document.addEventListener('mousemove', (e)=>{
    curs.style.left = e.pageX + 'px'
    curs.style.top = e.pageY + 'px'
})