const userName = document.querySelector('#validation-input');
const userNameLength = userName.dataset.length;

userName.addEventListener('blur', blurBorderColor);

function blurBorderColor(evt) {
    
    if (evt.currentTarget.value.length === userNameLength) {
        userName.classList.add('valid');
        userName.classList.remove('invalid');
        console.log(evt);
    }
    else 
        userName.classList.add('invalid');
        userName.classList.remove('valid');

        console.log(evt); 
    } 

    
        
        
    
