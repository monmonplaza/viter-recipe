<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/Recipe.php';
$conn = null;
$conn = checkDbConnection();
$recipe = new Recipe($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);
    $recipe->recipe_is_active = trim($data["filterby"]);

    $query = checkFilterByStatus($recipe);
    http_response_code(200);
    getQueriedData($query);
    checkEndpoint();
}

http_response_code(200);
checkAccess();
