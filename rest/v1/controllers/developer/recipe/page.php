<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/Recipe.php';
$conn = null;
$conn = checkDbConnection();
$recipe = new Recipe($conn);
$response = new Response();
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $recipe->recipe_start = $_GET['start'];
        $recipe->recipe_total = 50;
        checkLimitId($recipe->recipe_start, $recipe->recipe_total);
        $query = checkReadLimit($recipe);
        $total_result = checkReadAll($recipe);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $recipe->recipe_total,
            $recipe->recipe_start
        );
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();
