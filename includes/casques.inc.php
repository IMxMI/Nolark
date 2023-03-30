<?php
//instancier l'objet cnx avec la source de donnée, l'identifiant et le mdp d'accés à la bd.
$cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkuser', 'nolarkpwd'); // Corriger

//contenue de la requête.
$req = 'SELECT casque.id, nom, modele, libelle, prix, classement, image, stock';
$req .= ' FROM casque INNER JOIN type ON casque.type=type.id';
$req .= ' INNER JOIN marque ON casque.marque=marque.id';

//envoi de la requette au serveur.
$res = $cnx->query($req);

//affiche les images apres avoir parcourue les résultats.
echo '<section id="casques">';
while ($ligne = $res->fetch(PDO::FETCH_OBJ)) {
 echo '<article>';
 echo '<img src="../images/casques/', $ligne->libelle, '/', $ligne->image,
 '" alt="', $ligne->modele, '">';
 echo '</article>';
}
echo '</section>';