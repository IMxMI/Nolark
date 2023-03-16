window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");
    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {
        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("click", calcRemu);
    }
});