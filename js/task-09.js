function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = spanColor.textContent;

};

btnColor.addEventListener('click', changeColor);

console.log(btnColor);