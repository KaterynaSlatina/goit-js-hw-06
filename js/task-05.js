const userNameInput = document.querySelector('#name-input');
const userNameIOutput = document.querySelector('#name-output');
 

userNameInput.addEventListener('input', handlerInput);

function handlerInput(evt) {
    if (evt.currentTarget.value === "") {
        userNameIOutput.textContent = "Anonymous";
    } else {
        userNameIOutput.textContent = evt.currentTarget.value;
    }
    
}

