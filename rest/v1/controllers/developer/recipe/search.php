<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/Recipe.php';
$conn = null;
$conn = checkDbConnection();

$recipe = new Recipe($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    $recipe->recipe_search = $data["searchValue"];    // get data

    if ($data["isFilter"] == true) {
        if ($recipe->recipe_search != "") {

            checkKeyword($recipe->recipe_search);
            $recipe->recipe_is_active = checkIndex($data, "recipe_is_active");
            $query = checkFilterByStatusAndSearch($recipe);
            http_response_code(200);
            getQueriedData($query);
        }

        $recipe->recipe_is_active = checkIndex($data, "recipe_is_active");
        $query = checkFilterByStatus($recipe);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($recipe->recipe_search);
    $query = checkSearch($recipe);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}

http_response_code(200);
checkAccess();
