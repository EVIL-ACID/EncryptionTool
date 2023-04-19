/**
 * Initial permuation table (IP)
 */

const IP_TABLE = [
  58, 50, 42, 34, 26, 18, 10, 2,
  60, 52, 44, 36, 28, 20, 12, 4,
  62, 54, 46, 38, 30, 22, 14, 6,
  64, 56, 48, 40, 32, 24, 16, 8,
  57, 49, 41, 33, 25, 17, 9, 1,
  59, 51, 43, 35, 27, 19, 11, 3,
  61, 53, 45, 37, 29, 21, 13, 5,
  63, 55, 47, 39, 31, 23, 15, 7,
];


/**
 *  Final Permuation table (IP^-1)
 */

const FP_TABLE = [
  40, 8, 48, 16, 56, 24, 64, 32,
  39, 7, 47, 15, 55, 23, 63, 31,
  38, 6, 46, 14, 54, 22, 62, 30,
  37, 5, 45, 13, 53, 21, 61, 29,
  36, 4, 44, 12, 52, 20, 60, 28,
  35, 3, 43, 11, 51, 19, 59, 27,
  34, 2, 42, 10, 50, 18, 58, 26,
  33, 1, 41, 9, 49, 17, 57, 25,
];


/**
 * Expansion Table 
*/
const E_TABLE = [
  32, 1, 2, 3, 4, 5,
  4, 5, 6, 7, 8, 9,
  8, 9, 10, 11, 12, 13,
  12, 13, 14, 15, 16, 17,
  16, 17, 18, 19, 20, 21,
  20, 21, 22, 23, 24, 25,
  24, 25, 26, 27, 28, 29,
  28, 29, 30, 31, 32, 1,
];

/**
 * Permutation Function Table (P)
 */

const P_TABLE = [
  16, 7, 20, 21, 29, 12, 28, 17,
  1, 15, 23, 26, 5, 18, 31, 10,
  2, 8, 24, 14, 32, 27, 3, 9,
  19, 13, 30, 6, 22, 11, 4, 25,
];



/**
 * S-boxes
 */
const S_BOXES = [

  [
    14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7,
    0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8,
    4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0,
    15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13 
  ],

  [
    15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10,
    3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5,
    0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15,
    13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9 
  ],


  [
    10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8,
    13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1,
    13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7,
    1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12 
  ],

  [
    7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15,
    13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9,
    10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4,
    3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14 
  ],

  [
    2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9,
    14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6,
    4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14,
    11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3 
  ],

  [
    12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11,
    10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8,
    9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6,
    4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13 
  ],

  [
    4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1,
    13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6,
    1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2,
    6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12 
  ],


  [
    13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7,
    1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2,
    7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8,
    2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11 
  ]
]

const SHIFT_TABLE = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];


// ------------------ DES Functions ------------------

/**
 * Generate a random 64-bit key for DES encryption
 * @returns {string} The 64-bit key
 * convert it to ascii
 */


export function desKeyGenerator () {


  let key = new Uint8Array(1000);
  let keyString = '';
  let n = 0;

  crypto.getRandomValues(key);

  for(let i = 0; i < key.length; i++) {
    if(n === 8)
      break;
    
    if(key[i] >= 33 && key[i] <= 126) {
      keyString += String.fromCharCode(key[i]);
      n++;
    }
  }
  return keyString;
}

/**
 * Performs an initial permutation on the input block
 * @param {string} inputBlock - The 64-bit input block to permute
 * @returns {string} The permuted 64-bit block
 */
function initialPermutation(inputBlock) {
  // implementation details
  let permutedBlock = '';
  
  for (let i = 0; i < IP_TABLE.length; i++) {
    permutedBlock += inputBlock.charAt(IP_TABLE[i] - 1);
  }
  
  return permutedBlock;
}

/**
 * Performs an inverse permutation on the input block
 * @param {string} inputBlock - The 64-bit input block to permute
 * @returns {string} The permuted 64-bit block
 */
function finalPermutation(inputBlock) {
  // implementation details
  let permutedBlock = '';
  
  for (let i = 0; i < FP_TABLE.length; i++) {
    permutedBlock += inputBlock.charAt(FP_TABLE[i] - 1);
  }
  
  return permutedBlock;
}
/**
 * Generates the 16 subkeys based on the input key
 * @param {string} key - The 64-bit input key
 * @returns {string[]} An array of 16 48-bit subkeys
 */


/**
  * Generates the 16 subkeys based on the input key
  * @param {string} key - The 64-bit input key
  * @returns {string[]} An array of 16 48-bit subkeys
 */
function generateSubKeys(key) {

  // implementation details  
  let subKeys = [];
  let permutedKey = '';

  for (let i = 0; i < IP_TABLE.length; i++) {
    permutedKey += key.charAt(IP_TABLE[i] - 1);
  }

  let c = permutedKey.slice(0, 28);
  let d = permutedKey.slice(28);
  
  for (let i = 0; i < 16; i++) {
    c = leftShift(c, SHIFT_TABLE[i]);
    d = leftShift(d, SHIFT_TABLE[i]);
    let cd = c + d;
    let subKey = '';
    
    for (let j = 0; j < FP_TABLE.length; j++) {
      subKey += cd.charAt(FP_TABLE[j] - 1);
    }
    
    subKeys.push(subKey);
  }

  return subKeys;
}


/**
 * Performs the Feistel network function on the input block and subkey
 * @param {string} inputBlock - The 32-bit input block to transform
 * @param {string} subkey - The 48-bit subkey to use for the transformation
 * @returns {string} The transformed 32-bit block
 */
function feistelFunction(inputBlock, subkey) {
  // implementation details
  let expandedBlock = '';
  
  for (let i = 0; i < E_TABLE.length; i++) {
    expandedBlock += inputBlock.charAt(E_TABLE[i] - 1);
  }
  
  let xorBlock = xor(expandedBlock, subkey);
  let sBlock = '';
  
  for (let i = 0; i < 8; i++) {
    let row = parseInt(xorBlock.charAt(i * 6) + xorBlock.charAt(i * 6 + 5), 2);
    let col = parseInt(xorBlock.slice(i * 6 + 1, i * 6 + 5), 2);
    let s = S_BOXES[i][row * 16 + col];
    sBlock += s.toString(2).padStart(4, '0');
  }
  
  let permutedBlock = '';
  
  for (let i = 0; i < P_TABLE.length; i++) {
    permutedBlock += sBlock.charAt(P_TABLE[i] - 1);
  }
  
  return permutedBlock;
}


/**
 * Performs the DES encryption algorithm on the input block using the input key
 * @param {string} block - The 64-bit block to encrypt
 * @param {string} key - The 64-bit key to use for encryption
 * @returns {string} The encrypted 64-bit block
 */
function encryptBlock(block, key) {
  // convert block and key to binary first
  block = convertToBinary(block);
  key = convertToBinary(key);

  // generate subkeys
  const subKeys = generateSubKeys(key);

  // perform initial permutation
  block = initialPermutation(block);

  // split block into left and right halves
  let { left, right } = split(block);

  // perform 16 rounds of encryption
  for (let i = 0; i < 16; i++) {
    const newRight = xor(left, feistelFunction(right, subKeys[i]));
    left = right;
    right = newRight;
  }

  // combine left and right halves
  block = right + left;

  // perform final permutation
  block = finalPermutation(block);
  
  // convert back to hex
  block = convertToHex(block);
  return block;
}

/**
 * Performs the DES decryption algorithm on the input block using the input key
 * @param {string} block - The 64-bit block to decrypt
 * @param {string} key - The 64-bit key to use for decryption
 * @returns {string} The decrypted 64-bit block
 */
function decryptBlock(block, key) {
  // convert block and key to binary first
  block = hexToBinary(block);
  key = convertToBinary(key);

  // generate subkeys 
  const subKeys = generateSubKeys(key);
  console.log(subKeys);
  // perform initial permutation
  block = initialPermutation(block);

  // split block into left and right halves
  let { left, right } = split(block);

  // perform 16 rounds of decryption
  for (let i = 15; i >= 0; i--) {
    const newRight = xor(left, feistelFunction(right, subKeys[i]));
    left = right;
    right = newRight;
  }

  // combine left and right halves
  block = right + left;
  
  // perform final permutation
  block = finalPermutation(block);
  block = convertToAscii(block);


  return block;
}

/**
  * function to encrypt multiple blocks of data using des
  * @param {string} message - The message to encrypt
  * @param {string} key - The key to use for encryption
  * @returns {string} The encrypted message
**/
export function desEncrypt(message, key) {
  // pad message
  message = padMessage(message, 8);

  // encrypt each block
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i += 8) {
    encryptedMessage += encryptBlock(message.slice(i, i + 8), key);
  }

  return encryptedMessage;
}


/*
* function to decrypt multiple blocks of data using des
* @param {string} message - The message to decrypt
* @param {string} key - The key to use for decryption
* @returns {string} The decrypted message
*/
export function desDecrypt(message, key) {
  // decrypt each block
  let decryptedMessage = '';
  for (let i = 0; i < message.length; i += 16) {
    decryptedMessage += decryptBlock(message.slice(i, i + 16), key);
  }

  // remove padding
  const paddingLength = decryptedMessage.charCodeAt(decryptedMessage.length - 1);
  decryptedMessage = decryptedMessage.slice(0, -paddingLength);

  return decryptedMessage;
}

// ------------------ Helper Functions ------------------ //

/**
 * Splits an input binary string in half
 * @param {string} input - The input binary string to split in two 32-bit sub-blocks
 * @returns {Object} An object containing two halves of the input binary string: left and right
 */
function split(block) {
  // Function to split an input binary string in half
  // The function takes a binary string as input and returns an object containing two halves of the input binary string: left and right
  // The function should use the slice function to extract a substring

  // implementation details
  const left = block.slice(0, 32);
  const right = block.slice(32);

  return { left, right };
}

/**
* Performs a left shift on the input string by the specified amount
* @param {string} input - The input string to shift
* @param {number} shift - The number of characters to shift
* @returns {string} The shifted string
*/

function leftShift(input, shift) {
  return input.slice(shift) + input.slice(0, shift);
}

/**
 * Converts a hex string to binary
 * @param {string} input - The input hex string to convert to binary
 * @returns {string} The binary string
 */
function convertToHex(input) {
  let output = '';
  for (let i = 0; i < input.length; i += 4) {
    output += parseInt(input.slice(i, i + 4), 2).toString(16);
  }
  return output;
}


/**
 * Converts a hex string to binary
 * @param {string} input - The input hex string to convert to binary
 * @returns {string} The binary string
*/
function convertToBinary(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    let binary = input.charCodeAt(i).toString(2);
    output += '0'.repeat(8 - binary.length) + binary;
  }
  return output;
}


/**
* Converts a binary string to ASCII
* @param {string} input - The input binary string to convert to ASCII
* @returns {string} The ASCII string
*/
function convertToAscii(input) {
  
  //conver back to ascii from binary
  let output = '';
  for (let i = 0; i < input.length; i += 8) {
    output += String.fromCharCode(parseInt(input.slice(i, i + 8), 2));
  }
  return output;
}

/**
 * Pads the input message with PKCS#7 padding
 * @param {string} message - The message to pad
 * @param {number} blockSize - The block size in bytes
 * @returns {string} The padded message
 */
export function padMessage(message, blockSize) {
  const paddingLength = blockSize - (message.length % blockSize);
  const paddingChar = String.fromCharCode(paddingLength);
  const padding = paddingChar.repeat(paddingLength);
  return message + padding;
}


/*
* function to convert hex to binary
* @param {string} hex - The hex string to convert to binary
* @returns {string} The binary string
*/
function hexToBinary(hex) {
  let binary = '';
  for (let i = 0; i < hex.length; i++) {
    let binaryChar = parseInt(hex[i], 16).toString(2);
    binary += '0'.repeat(4 - binaryChar.length) + binaryChar;
  }
  return binary;
}


/*
* function to convert binary to hex
* @param {string} binary - The binary string to convert to hex
* @returns {string} The hex string
*/

function xor(a, b) {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    result += (a[i] === b[i]) ? '0' : '1';
  }
  return result;
}

/**
 * Performs the specified permutation on the input string according to the provided table
 * @param {string} input - The input string to permute
 * @param {Array<number>} table - The table defining the permutation order
 * @returns {string} The permuted string
 */
export function permute(input, table) {
  let output = '';
  for (let i = 0; i < table.length; i++) {
    output += input.charAt(table[i] - 1);
  }
  return output;
}
