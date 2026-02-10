const container = document.getElementById("container");

const button = document.getElementById("button");


const createGrid = (gridSize) => {
    if (gridSize > 100) return;

    container.innerHTML = "";


    const total = gridSize * gridSize;
    const squareSize = 500 / gridSize;


    for (let i = 0; i < total; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "pink";
        });

        container.appendChild(square);
    }
};

createGrid(16);

button.addEventListener("click", () => {
    const gridSize = parseInt(prompt("What is the preferred number of grids?"));
    if (!isNaN(gridSize))  createGrid(gridSize);
})



 
