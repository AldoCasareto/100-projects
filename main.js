const clickMe = document.querySelector('#click-me-btn');
const colorValue = document.querySelector('#color-code')

clickMe.addEventListener('click', changeColor);

function changeColor () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.background = "#" + randomColor;

    colorValue.innerHTML = '#' + randomColor

}


