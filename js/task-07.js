const inputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.addEventListener('input', changeSpan);
function changeSpan(evt) {
    text.style.fontSize = evt.currentTarget.value + 'px';
}

console.log(changeSpan);