let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

let draw = false;
let erase = false;

// Fonction pour détecter si l'appareil est un écran tactile
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

// Gestionnaire d'événement pour le bouton "Créer la grille"
gridButton.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);

            // Gestionnaire d'événement pour la couleur de fond de la colone
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            // Gestionnaire d'événement pour détecter le mouvement sur la colonne
            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId);
            });

            // Gestionnaire d'événement pourla fin du dessin
            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            div.appendChild(col);

        }

        container.appendChild(div);

    }
});

// Fonction pour vérifier l'élément survolé/maintenu enfoncé
function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

// Gestionnaire d'événement pour le bouton "Effacer la grille"
clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});

// Gestionnaire d'événement pour le bouton "Effacer"
eraseBtn.addEventListener("click", () => {
    erase = true;
});

// Gestionnaire d'événement pour le bouton "Peindre"
paintBtn.addEventListener("click", () => {
    erase = false;
});

// Gestionnaire d'événement pour la largeur de la grille
gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

// Gestionnaire d'événement pour la hauteur de la grille
gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};

// Gestionnaire d'événement pour le bouton "Sauvegarder"
const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", savePixelArt);

// Fonction pour sauvegarder le dessin
function savePixelArt() {
    const canvas = document.createElement("canvas");
    const gridColumns = document.querySelectorAll(".gridCol");
    const gridWidth = gridColumns.length;
    const gridHeight = gridColumns[0].parentNode.childNodes.length;
    const pixelSize = 10; // Taille de chaque pixel en pixel

    canvas.width = gridWidth * pixelSize;
    canvas.height = gridHeight * pixelSize;
    const context = canvas.getContext("2d");

    gridColumns.forEach((col, index) => {
        const rowIndex = Math.floor(index / gridWidth);
        const colIndex = index % gridWidth;
        const color = col.style.backgroundColor || "transparent";

        context.fillStyle = color;
        context.fillRect(
            colIndex * pixelSize,
            rowIndex * pixelSize,
            pixelSize,
            pixelSize
        );
    });

    const image = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = image;
    downloadLink.download = "pixel-art.png";
    downloadLink.click();
}