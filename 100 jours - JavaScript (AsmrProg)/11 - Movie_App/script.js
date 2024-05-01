let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Fonction pour récupérer les données de l'API
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // Si le champ de saisie est vide
    if (movieName.lenght <= 0) {
        result.innerHTML = `<h3 class="msg">Veillez entrer un nom de film</h3>`;
    }
    // Si le champ de saisie n'est pas vide
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            // Si le film existe dans la base
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="./images/star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>    
                    <h3>Intrigue :</h3>
                    <p>${data.Plot}</p>
                    <h3>Acteurs :</h3>
                    <p>${data.Actors}</p>
                `;
            }
            // Si le film ne se trouve pas dans la base
            else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
            // Si une erreur survient
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Une erreur est survenue</h3>`;
            });
    }
};

searchBtn.addEventListener('click', getMovie);
window.addEventListener("load", getMovie);

// Écouter l'événement "keydown" sur l'input
movieNameRef.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getMovie(); // Appeler la fonction de recherche si la touche "Entrée" est pressée
    }
});