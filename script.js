const block = document.querySelector('.js-block'),
color = document.querySelector('.js-color'),
sope = document.querySelector('.js-sope'),
hex = '0123456789ABCDEF';

console.log(hex[0]);
console.log(hex[15]);

let randomColor = '#';

const getRandomColor = () => {
    randomColor = '#';

    for(let i = 0; i < 6; i++){
        randomColor = randomColor + hex[Math.floor(Math.random()*hex.length)]

    }
    console.log(randomColor)
}

sope.addEventListener('click', () => {
    getRandomColor();
    block.style.backgroundColor = randomColor;
    block.style.boxShadow = `0px  5px 10px 2px ${randomColor}`;
    color.innerHTML = randomColor;
});