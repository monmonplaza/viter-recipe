<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/Chef.php';
$conn = null;
$conn = checkDbConnection();

$chef = new Chef($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    $chef->chef_search = $data["searchValue"];    // get data

    if ($data["isFilter"] == true) {
        if ($chef->chef_search != "") {

            checkKeyword($chef->chef_search);
            $chef->chef_is_active = checkIndex($data, "chef_is_active");
            $query = checkFilterByStatusAndSearch($chef);
            http_response_code(200);
            getQueriedData($query);
        }

        $chef->chef_is_active = checkIndex($data, "chef_is_active");
        $query = checkFilterByStatus($chef);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($chef->chef_search);
    $query = checkSearch($chef);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}

http_response_code(200);
checkAccess();
