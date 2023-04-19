import {
    generateRsaKey,
    rsaEncrypt,
    rsaDecrypt
} from "./rsa.js";

import {
    desKeyGenerator,
    desEncrypt,
    desDecrypt
} from "./des.js";


const encryptionTypeSelect = document.getElementById('encryption-type');
const desInputData = document.getElementById('des-input-data');
const desKey = document.getElementById('des-key');
const desOutput = document.getElementById('des-output');
const rsaInputData = document.getElementById('rsa-input-data');
const rsaKey = document.getElementById('rsa-key');
const rsaOutput = document.getElementById('rsa-output');
const publicKeyOutput = document.getElementById('rsa-public-key-output');
const privateKeyOutput = document.getElementById('rsa-private-key-output');
const keySizeSelect = document.getElementById('rsa-key-size');
const desKeyOutput = document.getElementById('des-key-output');




/**
 * Event listener for the click event
 * @param {Object} event - The event object
 * @param {string} event.target.id - The id of the element that was clicked
 */
document.addEventListener('click', (event) => {
    const eventTarget = event.target.id;
    if (['encrypt_btn', 'decrypt_btn'].includes(eventTarget)) {
        encryptionHandler(eventTarget);
    } else if (eventTarget === 'generate-rsa-key') {
        RSAkeyGenerator();
    } else if (eventTarget === 'generate-des-key') {
        DESkeyGenerator();
    } else if (eventTarget === 'clear_btn') {
        ClearInput();
    }
});


/**
 * Event listener for the change event
 * @param {Object} event - The event object
 * @param {string} event.target.value - The value of the element that was changed
 */
document.addEventListener('change', (event) => {
    const encryptionType = event.target.value;
    if (['rsa', 'des'].includes(encryptionType)) {
        changeEncryption(encryptionType);
    }
});



/**
 * Changes the encryption type
 * @param {string} encryptionType - The encryption type to change to
 */
const DESsetup = (operation) => {
    const inputText = desInputData.value;
    const key = desKey.value;
    if (operation === 'encrypt_btn') {
        desOutput.value = desEncrypt(inputText, key);
    } else if (operation === 'decrypt_btn') {
        desOutput.value = desDecrypt(inputText, key);
    }
};
 


/**
 * Changes the encryption type
 * @param {string} operation - The operation to perform
 */
const RSAsetup = (operation) => {
    const inputText = rsaInputData.value;
    const key = rsaKey.value;
    if (operation === 'encrypt_btn') {
        rsaOutput.value = rsaEncrypt(inputText, key);
    } else {
        rsaOutput.value = rsaDecrypt(inputText, key);
    }
};


/**
 * Generates a RSA key pair
 */
const RSAkeyGenerator = () => {

    const keySize = keySizeSelect.value === 'rsa-keysize512' ? 512 : 1024;
    const keyObject = generateRsaKey(keySize);
    publicKeyOutput.textContent = keyObject.encodedPublicKey;
    privateKeyOutput.textContent = keyObject.encodedPrivateKey;
};

/**
 * Generates a DES key
 */
const DESkeyGenerator = () => {
    const key = desKeyGenerator();
    desKeyOutput.textContent = key;
};


/**
 * Handles the encryption/decryption operations
 * @param {string} operation - The operation to perform (encrypt/decrypt)
 */
const encryptionHandler = (operation) => {
    const encryptionType = encryptionTypeSelect.value;
    if (encryptionType === 'des') {
        DESsetup(operation);
    } else if (encryptionType === 'rsa') {
        RSAsetup(operation);
    }
};
  

/**
 * Hides what algorithm container is shown depending on what the user selects
 * @param {string} encryptionType - The encryption type selected by the user
 */
const changeEncryption = (encryptionType) => {
    const rsaContainer = document.querySelector(".rsa-container");
    const desContainer = document.querySelector(".des-container");

    rsaContainer.style.display = (encryptionType === "rsa") ? "block" : "none";
    desContainer.style.display = (encryptionType === "des") ? "block" : "none";
};


/**
 * Clears the input fields
 */
const ClearInput = () => {
    desInputData.value = '';
    desKey.value = '';
    desOutput.value = '';
    rsaInputData.value = '';
    rsaKey.value = '';
    rsaOutput.value = '';
};
