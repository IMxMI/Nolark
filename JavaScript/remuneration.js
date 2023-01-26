/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const distance = 0.01, distance_max = 900, ancien_fixe = 300, ancien_up = 30;
let primeA = 0, primeD = 0;

function prime_ancien(ancien){
    if (ancien < 4){
        return(primeA = 0);
    }
    else{
        primeA = ancien_fixe ;

        if (ancien > 4){
            primeA = ancien_fixe + ((ancien-4)*ancien_up);
            }
        }
    return primeA
}

function prime_distance(km){
    primeD = distance*km;
    if (primeD > 900){
        primeD = 900;
    }
    return primeD
}

let prime = primeA + primeD;
