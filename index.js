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
    let password = '';
    const passwordLength = Number(passwordLengthDisplay.innerHTML);
    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * passwordSettings.length);
        let randomlySelectedFunction = passwordSettings[randomNum];
        password += randomlySelectedFunction();
    }
    displayPassword(password)
}

function displayPassword(password) {
    const passwordNode = document.createTextNode(password);
    // Need to remove text nodes each time a password is created. Otherwise passwords will stack. 
    removeTextNodes()
    passwordScreen.appendChild(passwordNode);
    console.log(password);
}

function removeTextNodes() {
    const childNodes = passwordScreen.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType === 3) {
            // Checks if it's a text node
            passwordScreen.removeChild(childNodes[i]);
            i--;
        }
    }
}

function generateLowerCase() {
    const randomNum = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    const generatedLetter = String.fromCharCode(randomNum);
    return generatedLetter;
}

function generateUpperCase() {
    const randomNum = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    const generatedLetter = String.fromCharCode(randomNum);
    return generatedLetter;
}

function generateNumber() {
    const randomNum = Math.floor(Math.random() * (57 - 48 + 1) + 48);
    const generatedNum = String.fromCharCode(randomNum);
    return generatedNum;
}

function generateSymbol() {
    const randomNum = Math.floor(Math.random() * (47 - 33 + 1) + 33);
    const generatedSymbol = String.fromCharCode(randomNum);
    return generatedSymbol;
}