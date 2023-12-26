'use strict'; 

const copyButton = document.querySelector('#copyButton');
const passwordScreen = document.querySelector('#passwordScreen');

copyButton.addEventListener('click', () => {
   const passwordScreenText = passwordScreen.innerText;
   if (passwordScreenText !== '') {
        navigator.clipboard.writeText(passwordScreenText);
   } 
});

const passwordLengthRange = document.querySelector('#passwordLengthRange');
const passwordLengthDisplay = document.querySelector('#passwordLengthDisplay');

passwordLengthRange.addEventListener('input', (event) => {
    passwordLengthDisplay.innerHTML = event.target.value;
});

const generatePasswordBtn = document.querySelector('#generatePasswordBtn');
const lowerCaseCheckbox = document.querySelector('#lowerCaseCheckbox');
const upperCaseCheckbox = document.querySelector('#upperCaseCheckbox');
const numberCheckbox = document.querySelector('#numberCheckbox');
const symbolsCheckbox = document.querySelector('#symbolsCheckbox');

generatePasswordBtn.addEventListener('click', () => {
    if (lowerCaseCheckbox.checked === true || upperCaseCheckbox.checked === true || numberCheckbox.checked === true || symbolsCheckbox.checked === true) {
        getPasswordSettings();
    }
});

function getPasswordSettings() {
    let passwordSettings = [];
    const checkboxes = document.querySelectorAll('.password-choices');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            if (checkboxes[i].value === 'lowerCase'){
                passwordSettings.push(generateLowerCase);
            } else if (checkboxes[i].value === 'upperCase') {
                passwordSettings.push(generateUpperCase);
            } else if (checkboxes[i].value === 'numbers') {
                passwordSettings.push(generateNumber);
            } else if (checkboxes[i].value === 'symbols') {
                passwordSettings.push(generateSymbol);
            }
        }
    }
    console.log(passwordSettings);
    generatePassword(passwordSettings);
}

function generatePassword(passwordSettings) {

}

function generateLowerCase() {

}

function generateUpperCase() {

}

function generateNumber() {

}

function generateSymbol() {

}