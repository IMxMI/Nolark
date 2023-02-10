// 0 verre
if (0 === getAlcooPur(0)) {
 console.log('0 verre : ok');
} else {
 console.log('0 verre : erreur');
}
// 1 verre
if (10 === getAlcooPur(1)) {
 console.log('1 verre : ok');
} else {
 console.log('1 verre : erreur');
}

/**
* Fonction qui retourne l'alcool pur ingéré en fonction du nombre
* de verre
*
* @param {int} nbVerres
* @returns {int}
*/
function getAlcoolPur(nbVerres) {
 const uniteAlcool = 10;
 return uniteAlcool * nbVerres;
}

/**
* Fonction qui retourne le coefficient de diffusion en fonction du sexe
*
* @param {string} sexe
* @returns {float}
*/
function getCoefDiffusion(sexe) {
 const coefDiffuH = 0.7, coefDiffuF = 0.6;
 if (sexe === 'homme') {
 return coefDiffuH;
 } else {
 return coefDiffuF;
 }
}

/**
* Fonction qui retourne l'alcoolémie en fonction du sexe, du poids et du
* nombre de verres ingérés
*
* @param {string} sexe
* @param {int} poids
* @param {int} nbVerres
* @returns {float}
*/
function getAlcoolemie(sexe, poids, nbVerres) {
 // /!\ division par 0, on ne veut pas provoquer la destruction de l'univers ;o)
 if (poids > 0) {
 return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
 } else {
 return 0;
 }
}
