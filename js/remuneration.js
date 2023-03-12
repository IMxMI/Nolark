function ancienneté (time, fixe){
    if (time >= 5){
        if (time >= 10){
            return fixe * 1.06;
        }
        else {
            return fixe * 1.03;
        }
    }
    else {
        return fixe
    }
}

function s20 (nb_vendu){
    const prix = 140;
    let ca = prix * nb_vendu;
    return (ca * 1.02) - ca;
}

function xspirit (nb_vendu){
    const prix = 350;
    if (nb_vendu > 50){
        let ca = prix * (nb_vendu - 50);
        return (ca * 1.06) - ca;
    }
    else {
        return 0;
    }
}

function multitec (nb_vendu){
const prixMu = 180.0, nbMultiTranche1 = 20, nbMultiTranche2 = 50;
    const txMultiTranche1 = 0.04, txMultiTranche2 = 0.06, txMultiTranche3 = 0.1;
    if (nb_vendu <= nbMultiTranche1) {
        return (nb_vendu * prixMu * txMultiTranche1);
    } else if (nb_vendu <= nbMultiTranche2) {
        return ((nbMultiTranche1 * prixMu * txMultiTranche1)
                + ((nb_vendu - nbMultiTranche1) * prixMu * txMultiTranche2));
    } else {
        return ((nbMultiTranche1 * prixMu * txMultiTranche1)
                + ((nbMultiTranche2 - nbMultiTranche1) * prixMu * txMultiTranche2)
                + ((nb_vendu - nbMultiTranche2) * prixMu * txMultiTranche3));
    }
}

window.addEventListener("load", function () {

    window.document.querySelector("#btn_calculer").addEventListener("click", function () {
        // Déclaration des constantes
        const fixe = 1100.0;

        // Déclaration et affectation des variables
        let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
        let nbS20 = parseInt(window.document.querySelector("#num_s20").value);
        let nbXS = parseInt(window.document.querySelector("#num_xs").value);
        let nbMulti = parseInt(window.document.querySelector("#num_multi").value);
        let remuneration = fixe + ancienneté(nbAncien, fixe)
                + s20(nbS20) + xspirit(nbXS)
                + multitec(nbMulti);
        // Affichage du résultat
        window.document.querySelector("#remuneration").innerHTML =
                "La rémunération sera de : " + remuneration + " €";
    });
});