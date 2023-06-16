/*
    CIT 281 Project 1
    Name: Owen Beedle
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a string of random lowercase letters of random length between 5 and 25
function generateRandomString() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const stringLength = getRandomInteger(5, 26);
    let result = '';
    for (let i = 0; i < stringLength; i++) {
        result += alphabet.charAt(getRandomInteger(0, alphabet.length));
    }
    return result;
}

console.log(generateRandomString());
