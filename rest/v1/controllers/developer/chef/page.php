<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/Chef.php';
$conn = null;
$conn = checkDbConnection();
$chef = new Chef($conn);
$response = new Response();
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $chef->chef_start = $_GET['start'];
        $chef->chef_total = 50;
        checkLimitId($chef->chef_start, $chef->chef_total);
        $query = checkReadLimit($chef);
        $total_result = checkReadAll($chef);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $chef->chef_total,
            $chef->chef_start
        );
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();
