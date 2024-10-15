<?php
$conn = null;
$conn = checkDbConnection();
$chef = new Chef($conn);
$error = [];
$returnData = [];
if (array_key_exists("chefid", $_GET)) {
    checkPayload($data);

    $chef->chef_aid = $_GET['chefid'];
    $chef->chef_name = checkIndex($data, "chef_name");
    $chef->chef_avatar = checkIndex($data, "chef_avatar");
    $chef->chef_slug = checkIndex($data, "chef_slug");
    $chef->chef_bio = checkIndex($data, "chef_bio");
    $chef->chef_fullbio = checkIndex($data, "chef_fullbio");
    $chef->chef_datetime = date("Y-m-d H:i:s");
    $chef_title_old = strtolower($data["chef_title_old"]);

    checkId($chef->chef_aid);

    compareName($chef, $chef_title_old, $chef->chef_name);

    $query = checkUpdate($chef);
    returnSuccess($chef, "chef", $query);
}

checkEndpoint();
