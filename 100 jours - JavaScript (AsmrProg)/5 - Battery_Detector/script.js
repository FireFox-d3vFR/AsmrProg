// Initialise le détecteur de batterie
initBattery();

function initBattery() {
    const batteryLiquid = document.querySelector(".Bliquid");
    const batteryStatus = document.querySelector(".Bstatus");
    const Bpercentage = document.querySelector(".Bpercentage");

    // Obtient l'objet Battery à l'aide de la méthode getBattery() de l'API Battery Status
    navigator.getBattery().then((batt) => {
        // Fonction de mise à jour de l'affichage de la batteie
        updateBattery = () => {
            let level = Math.floor(batt.level * 100);
            Bpercentage.innerHTML = level + "%";
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;

            // Vérifie le niveau de batteie pour afficher le statut correspondant
            if (level == 100) {
                batteryStatus.innerHTML = `Batterie Pleine <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";
            } else if (level <= 20 & !batt.charging) {
                batteryStatus.innerHTML = `Batterie Faible <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (batt.charging) {
                batteryStatus.innerHTML = `Chargement ... <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                batteryStatus.innerHTML = "";
            }

            // Applique des classe CSS pour modifier la couleur de l'indicateur de batterie en fonction du niveau
            if (level <= 20) {
                batteryLiquid.classList.add("gradient-color-red");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-yellow");
            } else if (level <= 48) {
                batteryLiquid.classList.add("gradient-color-orange");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-red", "gradient-color-yellow");
            } else if (level <= 80) {
                batteryLiquid.classList.add("gradient-color-yellow");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-red");
            } else {
                batteryLiquid.classList.add("gradient-color-green");
                batteryLiquid.classList.remove("gradient-color-red", "gradient-color-orange", "gradient-color-yellow");
            }
        }
        // Appelle la fonction de mise à jour de la batterie au chargement et lors des événements de changement de charge et de niveau
        updateBattery();
        batt.addEventListener("chargingchange", () => {
            updateBattery()
        });
        batt.addEventListener("levelchange", () => {
            updateBattery()
        });
    })
}
