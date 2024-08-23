// Generate secret number
let nuSecretNumber;
// Max number
let maxNumber = 10;
// Attempt counter
let nuAttempts;
// List of random numbers
let randomNumbersList = [];

// Generate a random number between 1 and 10
function generateSecretNumber() {
    // Random number generated
    let randomNumer = Math.floor(Math.random()*maxNumber)+1;
    console.log(randomNumer);
    console.log(randomNumbersList);
    // If all the possible random numbers are already in the list
    if (randomNumbersList.length == maxNumber) {
        // Print an informative message
        assignTextElement('p', 'All the possible numbers were already generated');
    } else {
        // If the random number is in the list
        if (randomNumbersList.includes(randomNumer)) {
            // If the random number is in the list, a new one is generated
            return generateSecretNumber(); // Recursion
        } else {
            // If the random number is not in the list, it can be used/returned
            randomNumbersList.push(randomNumer) // It is saved first
            return randomNumer;
        } 
    }
}

// Assign a given text to a given HTML element
function assignTextElement(element, texto){
    let elementHtml = document.querySelector(element);
    elementHtml.innerHTML = texto;
    return;
}

// Show the initial messages

function initialConditions() {
    // Show initial messages
    assignTextElement('h1', 'Secret number Game!');
    assignTextElement('p', 'Type a number between 1 and '+maxNumber);
    // Generate random number
    nuSecretNumber = generateSecretNumber();
    // Initialize the number of attempts
    nuAttempts = 1;
}

// Clean input typed by the user in the container with id = userValue
function cleanInputContainer(){
    document.querySelector('#userValue').value = '';
}

function verifyUserAttempt(){
    let userNumber = parseInt(document.getElementById('userValue').value);
    /* console.log(typeof(userNumber));
    console.log(userNumber); 
    console.log(typeof(nuSecretNumber)); 
    console.log(nuSecretNumber); */
    if (userNumber === nuSecretNumber) {
        assignTextElement('p', `You guessed the number in ${nuAttempts} ${(nuAttempts == 1) ? 'attempt' : 'attempts'}.`);
        // To remove the attribute 'disabled' in the new game button
        document.getElementById('Restart').removeAttribute('disabled');
    } else {
        // The use did not guess
        if (userNumber > nuSecretNumber) {
            assignTextElement('p', 'Wrong number, the secret number is lower');
        } else {
            assignTextElement('p', 'Wrong number, the secret number is higher');
        }
        // It adds one more attempt when the user did not guess the number
        nuAttempts++;
        // Clean the uset input when the number has not been guessed
        cleanInputContainer();
    }
    return;
}


function restartGame() {
    // Clean container
    cleanInputContainer();
    // Initialize conditions    
    initialConditions();    
    // Set disabled attribute to the new game button, it enables just when the number is guessed
    document.getElementById('Restart').setAttribute('disabled', true);    
}

initialConditions();
