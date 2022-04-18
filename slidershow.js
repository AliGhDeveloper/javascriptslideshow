let slides = document.querySelectorAll('.slide');
let points = document.querySelectorAll('.buttons > span');
let slideshow = document.querySelector('.slideshow');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');


nextButton.addEventListener('click', event => {
    goNext()
})

prevButton.addEventListener('click', event => {
    goPrev()
})

function changeClass(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[active].classList.add('active');
    points.forEach(point => {
        point.classList.remove('active');
    })
    points[active].classList.add('active');
}

let active = 0;
function goNext(){
    active = (active== slides.length-1) ? active=0 : active + 1;
    changeClass()
}

function goPrev(){
    active = (active== 0) ? active= slides.length-1: active - 1;
    changeClass()
}

let runs = setInterval(goNext, 2000);

slideshow.addEventListener('mouseover', event=> {
    clearInterval(runs)
})

slideshow.addEventListener('mouseout', event=> {
    runs = setInterval(goNext, 2000)
})

points.forEach((point,index) => {
    point.addEventListener('click', event => {
        active = index;
        changeClass()
    } )
})