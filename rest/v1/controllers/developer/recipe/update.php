<?php
$conn = null;
$conn = checkDbConnection();
$recipe = new Recipe($conn);
$error = [];
$returnData = [];
if (array_key_exists("recipeid", $_GET)) {
    checkPayload($data);

    $recipe->recipe_aid = $_GET['recipeid'];
    $recipe->recipe_title = checkIndex($data, "recipe_title");
    $recipe->recipe_slug = checkIndex($data, "recipe_slug");
    $recipe->recipe_published = checkIndex($data, "recipe_published");
    $recipe->recipe_description = checkIndex($data, "recipe_description");
    $recipe->recipe_thumbnail = checkIndex($data, "recipe_thumbnail");
    $recipe->recipe_time = checkIndex($data, "recipe_time");
    $recipe->recipe_tag = checkIndex($data, "recipe_tag");
    $recipe->recipe_category_id = checkIndex($data, "recipe_category_id");
    $recipe->recipe_author_id = checkIndex($data, "recipe_author_id");
    $recipe->recipe_isFeature = checkIndex($data, "recipe_isFeature");
    $recipe->recipe_isBanner = checkIndex($data, "recipe_isBanner");
    $recipe->recipe_serving = checkIndex($data, "recipe_serving");
    $recipe->recipe_instruction = checkIndex($data, "recipe_instruction");
    $recipe->recipe_ingredients = checkIndex($data, "recipe_ingredients");
    $recipe->recipe_datetime = date("Y-m-d H:i:s");
    $recipe_title_old = strtolower($data["recipe_title_old"]);

    checkId($recipe->recipe_aid);

    compareName($recipe, $recipe_title_old, $recipe->recipe_title);

    $query = checkUpdate($recipe);
    returnSuccess($recipe, "recipe", $query);
}

checkEndpoint();
