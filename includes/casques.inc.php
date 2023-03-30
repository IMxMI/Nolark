<?php
//instancier l'objet cnx avec la source de donnée, l'identifiant et le mdp d'accés à la bd.
$cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkuser', 'nolarkpwd');