const imgBx = document.querySelector('.imgBx');
const slider = imgBx.getElementsByTagName('img');
let i = 0;

function nextSlide() {
    slider[i].classList.remove('active');
    i = (i + 1) % slider.length;
    slider[i].classList.add('active');
}
function prevSlide() {
    slider[i].classList.remove('active');
    i = (i - 1 + slider.length) % slider.length;
    slider[i].classList.add('active');
}

const contentBx = document.querySelector('.contentBx');
const sliderText = contentBx.getElementsByTagName('div');
let j = 0;

function nextSlideText() {
    sliderText[j].classList.remove('active');
    j = (j + 1) % sliderText.length;
    sliderText[j].classList.add('active');
}
function prevSlideText() {
    sliderText[j].classList.remove('active');
    j = (j - 1 + sliderText.length) % sliderText.length;
    sliderText[j].classList.add('active');
}