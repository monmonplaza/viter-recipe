<?php
$conn = null;
$conn = checkDbConnection();
$chef = new Chef($conn);
$error = [];
$returnData = [];
if (array_key_exists("chefid", $_GET)) {
    $chef->chef_aid = $_GET['chefid'];
    checkId($chef->chef_aid);
    $query = checkReadById($chef);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($chef);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
