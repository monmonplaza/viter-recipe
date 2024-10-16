<?php
$conn = null;
$conn = checkDbConnection();

$chef = new Chef($conn);

if (array_key_exists("chefid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$chef->chef_name = checkIndex($data, "chef_name");
$chef->chef_avatar = checkIndex($data, "chef_avatar");
$chef->chef_slug = checkIndex($data, "chef_slug");
$chef->chef_bio = checkIndex($data, "chef_bio");
$chef->chef_fullbio = checkIndex($data, "chef_fullbio");
$chef->chef_is_active = 1;
$chef->chef_created = date("Y-m-d H:i:s");
$chef->chef_datetime = date("Y-m-d H:i:s");

isNameExist($chef, $chef->chef_name);

$query = checkCreate($chef);
returnSuccess($chef, "chef", $query);
