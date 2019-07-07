var i = 0;
var slide = [firstSlide, secondSlide, thirdSlide];
var time = 3000;

var firstSlide = document.querySelector('#firstslide');
var secondSlide = document.querySelector('#secondslide');
var thirdSlide = document.querySelector('#thirdslide');
// firstSlide.style.display = 'block';
// secondSlide.style.display = 'block';
// thirdSlide.style.display = 'block';

function changeImg() {
    // document.slides = slide[i];

    if (i < slide.length - 1) {
        slide[0] = firstSlide.style.display = 'block';
        slide[1] = secondSlide.style.display = 'none';
        slide[2] = thirdSlide.style.display = 'none';
        i++;
    } else if(i < slide.length ){
        slide[0] = firstSlide.style.display = 'none';
        slide[1] = secondSlide.style.display = 'block';
        slide[2] = thirdSlide.style.display = 'none';
        i++;
    } else{
        slide[0] = firstSlide.style.display = 'none';
        slide[1] = secondSlide.style.display = 'none';
        slide[2] = thirdSlide.style.display = 'block';
        i = 0;
    }


    setTimeout('changeImg()', time)
}
window.onload = changeImg;