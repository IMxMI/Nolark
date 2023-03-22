<?php
$scriptName = filter_input(INPUT_SERVER, 'SCRIPT_FILENAME');
$name = substr($scriptName, strripos($scriptName, '/') + 1);
if ($name === 'index.php') {
    $dirIndex = './';
    $dirPages = './pages/';
} else {
    $dirIndex = '../';
    $dirPages = './';
}
$navpages = array(
    'Route' => 'route.php',
    'Cross' => 'cross.php',
    'Piste' => 'piste.php',
    'Enfant' => 'enfant.php',
    'Nous contacter' => 'nous-contacter.php'
);
foreach ($navpages as $cle => $val) {
    echo '<li><a href="pages/', $cle, '">', $val, '</a></li>';
}
//substr strrpos