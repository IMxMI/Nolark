function ancienneté (time){
    const fixe = 1100;
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