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
    if (array_key_exists("chefid", $_GET)) {

        checkPayload($data);
        $chef->chef_aid = $_GET['chefid'];
        $chef->chef_is_active = trim($data["isActive"]);
        $chef->chef_datetime = date("Y-m-d H:i:s");

        checkId($chef->chef_aid);
        $query = checkActive($chef);
        http_response_code(200);
        returnSuccess($chef, "chef", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();
