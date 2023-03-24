<!DOCTYPE html>
<!-- 
     Page web créé dans le cadre du cours de web Dev le 27/01/2023
     Auteur : Vernoux Maxime
-->

<html lang="fr-FR">

<head>
    <title>Casques Nolark : Sécurité et confort, nos priorités !</title>
    <meta charset="UTF-8">
    <meta name="author" content="José GIL">
    <meta name="description"
        content="Découvrez des casques moto dépassant même les exigences des tests de sécurité. Tous les casques Nolark au meilleur prix et avec en prime la livraison gratuite !">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/styles.css" rel="stylesheet" type="text/css">
    <link href="../css/simulateur.css" rel="stylesheet" type="text/css">
    <script src="../js/alcoolemie.js"></script>
    <link rel="icon" href="../favicon.ico">
</head>

<body>
    <?php
    include_once('../includes/header.html.inc.php');
    ?>
    <section id="formulaire">
        <h1>Simulateur de prime annuelle pour les chauffeurs de Livr'Express :</h1>
        <form id="form_simulateur" name="form_simulateur">
            <fieldset id="recueilinfos">
                <legend>Vos informations : </legend>
                <p>
                    <label for="num_poids">Poids :</label>
                    <input type="number" name="num_poids" id="num_poids" min="0" max="999999" value="0">
                </p>
                <fieldset id="sexe">
                    <legend>Sexe :</legend>

                    <input type="radio" id="rd_homme" name="sexe" value="homme">
                    <label for="rd_homme">Homme</label><br>

                    <input type="radio" id="rd_femme" name="sexe" value="femme">
                    <label for="rd_femme">Femme</label><br>

                </fieldset>
                <p>
                    <label for="num_verre">Nombre de verres consommé :</label>
                    <input type="number" name="num_verre" id="num_verre" min="0" max="999999" value="0">
                </p>
            </fieldset>
            <p id="controles">
                <input type="reset" id="btn_annuler" value="Effacer les données">
            </p>
        </form>
    </section>
    <footer>
        <p>2023 Nolark - Créé par Vernoux Maxime
        <p>
    </footer>
</body>

</html>