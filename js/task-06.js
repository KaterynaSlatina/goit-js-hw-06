
    
const userName = document.getElementById('validation-input');
userName.addEventListener('blur', BlurBorderColor);

function BlurBorderColor(event) {
    const inputDataLength = Number(userName.dataset.length);
    const inputValueLength = Number(userName.value.trim().length);

    if (inputValueLength === inputDataLength) {
        userName.classList.add('valid');
        userName.classList.remove('invalid');
    } else {
        userName.classList.remove('valid');
        userName.classList.add('invalid');
    }
}
        
    
