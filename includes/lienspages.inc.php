<?php
$navpages = array(
    'route.html' => 'Route',
    'cross.html' => 'Cross',
    'piste.html' => 'Piste',
    'enfant.html' => 'Enfants',
    'nous-contacter.html' => 'Nous contacter'
);
foreach ($navpages as $cle => $val) {
    echo '<li><a href="pages/', $cle, '">', $val, '</a></li>';
}