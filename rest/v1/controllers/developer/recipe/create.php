<?php
$conn = null;
$conn = checkDbConnection();

$recipe = new Recipe($conn);

if (array_key_exists("recipeid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

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
$recipe->recipe_ingredients = $data["recipe_ingredients"];

$recipe->recipe_is_active = 1;
$recipe->recipe_created = date("Y-m-d H:i:s");
$recipe->recipe_datetime = date("Y-m-d H:i:s");

isNameExist($recipe, $recipe->recipe_title);

$query = checkCreate($recipe);
returnSuccess($recipe, "recipe", $query);
