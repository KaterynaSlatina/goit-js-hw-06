const inputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeSpan(evt) {
    text.style.fontSize = evt.currentTarget.value + 'px';
}

inputFontSize.addEventListener('input', changeSpan);