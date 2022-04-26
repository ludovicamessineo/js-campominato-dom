// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


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
    
    
    
    const gridSize = 100;
    const gridArray = generateGridNumber(gridSize);


    // Creo grid item
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridArray.length; i++) {
        const thisNumber = gridArray[i];
        console.log(thisNumber);

        const domElement = generateGridItem(thisNumber)

        // Al click
        domElement.addEventListener("click", function() {
            this.classList.add("active");
        });

        // Appendo elemento
        gridContainer.append(domElement);
    }
}

function generateGridNumber(gridNumberQuantity) {
    const numberArray = [];

    // Con ciclo for creo numeri da 1 a 100
    for (let i = 1; i <= 100; i++) {
        const singleNumber = i;

       numberArray.push(singleNumber);
    }

    console.log(numberArray);

    return numberArray;
    
}

function generateGridItem(number) {
    const newElement = document.createElement("div");
    console.log(newElement);
    newElement.innerHTML = `<span>${number}</span>`
    newElement.classList.add("grid-item");

    return newElement;

}