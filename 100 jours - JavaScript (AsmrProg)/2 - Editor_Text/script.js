let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
]; // Liste des polices d'écriture disponibles

const intializer = () => {
    highlighter(alignButtons, true); // Applique le surlignage initial aux boutons d'alignement
    highlighter(spacingButtons, true); // Applique le surlignage initial aux boutons d'espacement
    highlighter(formatButtons, false); // Applique le surlignage initial aux boutons de formatage
    highlighter(scriptButtons, true); // Applique le surlignage initial aux boutons de script

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option); // Ajoute des options de police à la liste déroulante de la police
    });

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option); // Ajoute des options de taille de police à la liste déroulante de la taille de police
    }

    fontSizeRef.value = 3; // Définit la valeur par défaut de la taille de police
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value); // Modifie le texte dans la zone de saisie en utilisant la commande spécifiée
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null); // Applique la modification de texte lorsque le bouton est cliqué
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value); // Applique la modification de texte avancée lorsque le bouton est modifié
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?"); // Demande à l'utilisateur d'entrer une URL
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink); // Applique la modification de texte avec le lien lorsque l'URL est valide

    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink); // Ajoute le préfixe "http://" et applique la modification de texte avec le lien
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className); // Supprime le surlignage des autres boutons du même groupe
                if (!alreadyActive) {
                    button.classList.add("active"); // Applique le surlignage actif au bouton cliqué
                }
            } else {
                button.classList.toggle("active"); // Active/désactive le surlignage du bouton cliqué
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active"); // Supprime le surlignage actif des boutons du même groupe
    });
};

window.onload = intializer(); // Appelle la fonction d'initialisation lorsque la fenêtre est entièrement chargée