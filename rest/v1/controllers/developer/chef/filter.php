<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/Chef.php';
$conn = null;
$conn = checkDbConnection();
$chef = new Chef($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);
    $chef->chef_is_active = trim($data["filterby"]);

    $query = checkFilterByStatus($chef);
    http_response_code(200);
    getQueriedData($query);
    checkEndpoint();
}

http_response_code(200);
checkAccess();
