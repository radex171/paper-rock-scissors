let randomNumber = Math.floor(Math.random()*3 + 1)

function getMoveName(move){
    if (move == 1){
        return 'kamień'
    }
    else if( move == 2){
        return 'papier';
    }
    else if( move == 3) {
        return 'nożyce';
    }

    else {
        return 'nieznany ruch'
    }
}

let playerInput = prompt('wybierz swój ruch: 1: kamień, 2: nożyce, 3: papier');

let playerMove = ''

if (playerInput == 1 ){
    playerMove = 'kamień'
}
else if (playerInput == 2){
    playerMove = 'nożyce'
}
else if (playerInput == 3){
    playerMove = 'papier'
}
else{
    playerMove = 'nieznany ruch'
}
let computerMove = getMoveName(randomNumber);

console.log(computerMove)

let result = '';

if (computerMove == 'kamień' && playerMove == 'papier' ||
     computerMove == 'papier' && playerMove == 'nożyce' ||
     computerMove == 'nożyce' && playerMove == 'kamień'){
    result = 'wygrałeś/aś'
}
else if (computerMove == 'kamień' && playerMove == 'nożyce' ||
computerMove == 'papier' && playerMove == 'kamień' ||
computerMove == 'nożyce' && playerMove == 'papier'){
result = 'przegrałeś/aś'
}

else if (computerMove == 'kamień' && playerMove == 'kamień' ||
computerMove == 'papier' && playerMove == 'papier' ||
computerMove == 'nożyce' && playerMove == 'nożyce'){
result = 'remis'
}

else {
    result = 'niestety ale coś poszło nie tak, spróbuj jeszcze raz'
}

printMessage('zagrałem ' + computerMove + '! twój ruch to '+ playerMove +', to ' + result);