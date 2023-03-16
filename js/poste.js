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

/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 *
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    return parseInt(window.document.querySelector(id).value);
}

function tarif (poids){
    const poid1 = 4.95, poid2 = 6.70, poid3 = 7.60, poid4 = 8.25, poid5 = 9.55, poid6 = 14.65, poid7 = 21.30, poid8 = 26.95, poid9 = 33.40;
    if (poids < 250){
        return poid1;
    }
    else if (poids < 500){
        return poid2;
    }
    else if (poids < 750){
        return poid3;
    }
}