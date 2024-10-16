<?php
$conn = null;
$conn = checkDbConnection();
$chef = new Chef($conn);
$error = [];
$returnData = [];
if (array_key_exists("chefid", $_GET)) {
    $chef->chef_aid = $_GET['chefid'];
    checkId($chef->chef_aid);
    // isAssociated($chef);
    $query = checkDelete($chef);
    returnSuccess($chef, "chef", $query);
}

checkEndpoint();
