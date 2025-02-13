const difficulty_levels = {
    facile: { max: 100, attempts: 10 },
    intermediaire: { max: 500, attempts: 7 },
    difficile: { max: 1000, attempts: 5 }
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function chooseDifficulty() {
    let choice;
    do {
        choice = prompt("Choisissez le niveau de difficulté :\n1. Facile\n2. Intermédiaire\n3. Difficile").toLowerCase();
    } while (!['1', '2', '3', 'facile', 'intermediaire', 'difficile'].includes(choice));

    switch(choice) {
        case '1':
        case 'facile':
            return 'facile';
        case '2':
        case 'intermediaire':
            return 'intermediaire';
        case '3':
        case 'difficile':
            return 'difficile';
    }
}
function playGame(difficulty) {
    const params = difficulty_levels[difficulty];
    const numberToGuess = getRandomNumber(params.max);
    let remainingAttempts = params.attempts;
    
    alert(`Vous avez ${remainingAttempts} tentatives pour trouver un nombre entre 1 et ${params.max}`);

    while (remainingAttempts > 0) {
        const guess = parseInt(prompt(`Il vous reste ${remainingAttempts} tentative(s). Entrez votre nombre :`));
        
        if (isNaN(guess)) {
            alert("Veuillez entrer un nombre valide.");
            continue;
        }

        if (guess === numberToGuess) {
            alert(`Bravo ! Vous avez trouvé le nombre ${numberToGuess} !`);
            return true;
        }

        remainingAttempts--;
        
        if (remainingAttempts > 0) {
            const message = guess < numberToGuess ? "C'est plus !" : "C'est moins !";
            alert(message);
        }
    }

    alert(`Perdu ! Le nombre était ${numberToGuess}`);
    return false;
}

function startGame() {
    const difficulty = chooseDifficulty();
    playGame(difficulty);
    
    if (confirm("Voulez-vous rejouer ?")) {
        startGame();
    }
}
window.onload = startGame;