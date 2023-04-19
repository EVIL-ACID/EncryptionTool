



/* ----------------------- RSA Encryption  ----------------------- */

/**
 * Encrypts a message using an RSA public key
 * @param {string} message - The message to encrypt
 * @param {Object} publicKey - An object containing the RSA public key components (e.g., {e: 65537, n: 123456789})
 * @returns {string} The encrypted message as a string
 */
export function rsaEncrypt(message, publicKey) {
  // Convert the message to a big integer
  let m = bigInt(stringToHex(message), 16);

  // Extract the data from the public key object
  let pubKey = JSON.parse(atob(publicKey));

  // Convert the public key to big integers
  let n = bigInt(pubKey.n, 16);
  let e = bigInt(pubKey.e, 16);

  // Encrypt the message using the public key
  let c = m.modPow(e, n);

  // Convert the encrypted message to a hex string and return it
  return c.toString(16);
}



/* ----------------------- RSA Decrypt  ----------------------- */


/**
 * Decrypts a message using an RSA private key
 * @param {string} cipherText - The encrypted message to decrypt
 * @param {Object} privateKey - An object containing the RSA private key components (e.g., {d: 987654321, n: 123456789})
 * @returns {string} The decrypted message as a string
 */
export function rsaDecrypt(cipherText, privateKey) {
  // Convert the encrypted message to a big integer
  let c = bigInt(cipherText, 16);


  let privKey = JSON.parse(atob(privateKey));

  // Convert the private key to big integers
  let n = bigInt(privKey.n, 16);
  let d = bigInt(privKey.d, 16);

  // Decrypt the message using the private key
  let m = c.modPow(d, n);
  let hexMessage = m.toString(16);
  let message = hexToStr(hexMessage);
  // Convert the decrypted message to a string and return it
  return message;
}



/* ----------------------- RSA Key Generation  ----------------------- */



/**
 * Generates a pair of RSA keys
 * @param {number} keySize - The bit length of the RSA keys
 * @returns {Object} An object containing the encoded public and private keys
 */
export function generateRsaKey(keySize){

  let p = generatePrime(keySize);
  let q = generatePrime(keySize);

  let n = bigInt(p).multiply(bigInt(q));
  let phi = (bigInt(p).minus(1)).multiply(bigInt(q).minus(1)); 
  
  let exp = bigInt(65537);
  let d = exp.modInv(phi);

  let publicKey = {
    n: n.toString(16),
    e: exp.toString(16),
  };
  let privateKey = {
    n: n.toString(16),
    d: d.toString(16),
  };


  let encodedPublicKey = btoa(JSON.stringify(publicKey));
  let encodedPrivateKey = btoa(JSON.stringify(privateKey));

  return {encodedPublicKey, encodedPrivateKey};
}



/**
 * Generates a random prime number with the specified bit length
 * @param {number} bitLength - The bit length of the prime number
 * @returns {bigInt} A random prime number
 */
function generatePrime(bitLength) {
  let isPrime = false;
  while (!isPrime) {
    // Generate a random number with the specified bit length
    let num = bigInt.randBetween(
      bigInt(2).pow(bitLength - 1),
      bigInt(2).pow(bitLength)
    );
    
    // Check if the number is prime
    isPrime = num.isProbablePrime(10);
    
    if (isPrime) {
      return num;
    }
  }
}



/* ----------------------- Helper Functions  ----------------------- */

/**
 * Converts a hex string to a string
 * @param {string} hex - The hex string to convert
 * @returns {string} The converted string
 */
function hexToStr(hex) {
  let str = '';
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}



/**
 * Converts a string to a hex string
 * @param {string} str - The string to convert
 * @returns {string} The converted hex string
 */
function stringToHex(str) {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    hex += charCode.toString(16);
  }
  return hex;
}