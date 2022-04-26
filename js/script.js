// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

document.getElementById("play").addEventListener("click", startGame);

// FUNCTION
function startGame() {
    // Prelevo h2 e griglia con id
    const titleChoice = document.getElementById("title-choice");
    const grid = document.getElementById("grid");
    console.log(titleChoice, grid);
    // Aggiungo la classe hidden all'h2 e la rimuovo dalla griglia per mostrarla
    titleChoice.classList.add("hidden");
    grid.classList.remove("hidden");
    grid.innerHTML = "";
    
    // In base alla scelta dell'utente sulla difficoltà definisco numero di celle della griglia
    const level = parseInt(document.getElementById("level").value);
    let cellNumber;
    let cellRow;
    if (level === 1) {
        cellNumber = 100;
        cellRow = 10;
    } else if (level === 2) {
        cellNumber = 81;
        cellRow = 9;
    } else {
        cellNumber = 49;
        cellRow = 7;
    }
    
    for (let i = 1; i <= cellNumber; i ++) {
        const newItem = generateGridItem(i, cellRow);
        newItem.addEventListener("click", handleCellClick);
        grid.append(newItem);
    }

}

// Creo array vuoto delle bombe 
const bombArray = [];

// Genero 16 numeri random che non si devono ripetere e man mano li aggiungo nell'array delle bombe
const rndNumber = getRndInteger()
    

function getRndInteger(min, max) {
    return Math.floor(Math.random() * 100) + 1;
  }

console.log(rndNumber);


function handleCellClick() {
    this.classList.add("active");
}


// Creazione dell'elemento nella griglia
function generateGridItem(gridNumber, cellsInRow) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `calc(100% / ${cellsInRow})`;
    gridItem.style.height = `calc(100% / ${cellsInRow})`;
    gridItem.innerHTML = `<span>${gridNumber}</span>`

    return gridItem;
}