<?php
class Recipe
{
    public $recipe_aid;
    public $recipe_title;
    public $recipe_slug;
    public $recipe_published;
    public $recipe_description;
    public $recipe_thumbnail;
    public $recipe_time;
    public $recipe_tag;
    public $recipe_category_id;
    public $recipe_author_id;
    public $recipe_isFeature;
    public $recipe_isBanner;
    public $recipe_serving;
    public $recipe_instruction;
    public $recipe_ingredients;
    public $recipe_is_active;
    public $recipe_datetime;
    public $recipe_created;

    public $connection;
    public $lastInsertedId;

    public $recipe_start;
    public $recipe_total;
    public $recipe_search;

    public $tblRecipe;
    public $tblCategory;
    public $tblChef;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRecipe = "recipe_recipe";
        $this->tblCategory = "recipe_category";
        $this->tblChef = "recipe_chef";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblRecipe} ";
            $sql .= "( recipe_title, ";
            $sql .= "recipe_slug, ";
            $sql .= "recipe_published, ";
            $sql .= "recipe_description, ";
            $sql .= "recipe_thumbnail, ";
            $sql .= "recipe_time, ";
            $sql .= "recipe_tag, ";
            $sql .= "recipe_category_id, ";
            $sql .= "recipe_author_id, ";
            $sql .= "recipe_isFeature, ";
            $sql .= "recipe_isBanner, ";
            $sql .= "recipe_serving, ";
            $sql .= "recipe_ingredients, ";
            $sql .= "recipe_instruction, ";
            $sql .= "recipe_is_active, ";
            $sql .= "recipe_datetime, ";
            $sql .= "recipe_created ) values ( ";
            $sql .= ":recipe_title, ";
            $sql .= ":recipe_slug, ";
            $sql .= ":recipe_published, ";
            $sql .= ":recipe_description, ";
            $sql .= ":recipe_thumbnail, ";
            $sql .= ":recipe_time, ";
            $sql .= ":recipe_tag, ";
            $sql .= ":recipe_category_id, ";
            $sql .= ":recipe_author_id, ";
            $sql .= ":recipe_isFeature, ";
            $sql .= ":recipe_isBanner, ";
            $sql .= ":recipe_serving, ";
            $sql .= ":recipe_ingredients, ";
            $sql .= ":recipe_instruction, ";
            $sql .= ":recipe_is_active, ";
            $sql .= ":recipe_datetime, ";
            $sql .= ":recipe_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => $this->recipe_title,
                "recipe_slug" => $this->recipe_slug,
                "recipe_published" => $this->recipe_published,
                "recipe_description" => $this->recipe_description,
                "recipe_thumbnail" => $this->recipe_thumbnail,
                "recipe_time" => $this->recipe_time,
                "recipe_tag" => $this->recipe_tag,
                "recipe_category_id" => $this->recipe_category_id,
                "recipe_author_id" => $this->recipe_author_id,
                "recipe_isFeature" => $this->recipe_isFeature,
                "recipe_isBanner" => $this->recipe_isBanner,
                "recipe_serving" => $this->recipe_serving,
                "recipe_ingredients" => $this->recipe_ingredients,
                "recipe_instruction" => $this->recipe_instruction,
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_created" => $this->recipe_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblRecipe} as recipe, ";
            $sql .= "{$this->tblCategory} as category, ";
            $sql .= "{$this->tblChef} as chef ";
            $sql .= "where recipe.recipe_author_id = chef.chef_aid ";
            $sql .= "and recipe.recipe_category_id = category.category_aid ";
            $sql .= "order by recipe_title desc, ";
            $sql .= "recipe_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblRecipe} as recipe, ";
            $sql .= "{$this->tblCategory} as category, ";
            $sql .= "{$this->tblChef} as chef ";
            $sql .= "where recipe.recipe_author_id = chef.chef_aid ";
            $sql .= "and recipe.recipe_category_id = category.category_aid ";
            $sql .= "order by recipe_title desc, ";
            $sql .= "recipe_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->recipe_start - 1,
                "total" => $this->recipe_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblRecipe} ";
            $sql .= "where recipe_title like :recipe_title ";
            $sql .= "order by recipe_title desc, ";
            $sql .= "recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "%{$this->recipe_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblRecipe} as recipe, ";
            $sql .= "{$this->tblCategory} as category, ";
            $sql .= "{$this->tblChef} as chef ";
            $sql .= "where recipe.recipe_author_id = chef.chef_aid ";
            $sql .= "and recipe.recipe_category_id = category.category_aid ";
            $sql .= "and recipe_aid = :recipe_aid ";
            $sql .= "order by recipe_title desc, ";
            $sql .= "recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblRecipe} set ";
            $sql .= "recipe_title = :recipe_title, ";
            $sql .= "recipe_slug = :recipe_slug, ";
            $sql .= "recipe_published = :recipe_published, ";
            $sql .= "recipe_description = :recipe_description, ";
            $sql .= "recipe_thumbnail = :recipe_thumbnail, ";
            $sql .= "recipe_time = :recipe_time, ";
            $sql .= "recipe_tag = :recipe_tag, ";
            $sql .= "recipe_category_id = :recipe_category_id, ";
            $sql .= "recipe_author_id = :recipe_author_id, ";
            $sql .= "recipe_isFeature = :recipe_isFeature, ";
            $sql .= "recipe_isBanner = :recipe_isBanner, ";
            $sql .= "recipe_serving = :recipe_serving, ";
            $sql .= "recipe_ingredients = :recipe_ingredients, ";
            $sql .= "recipe_instruction = :recipe_instruction, ";
            $sql .= "recipe_is_active = :recipe_is_active, ";
            $sql .= "recipe_datetime = :recipe_datetime ";
            $sql .= "where recipe_aid = :recipe_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => $this->recipe_title,
                "recipe_slug" => $this->recipe_slug,
                "recipe_published" => $this->recipe_published,
                "recipe_description" => $this->recipe_description,
                "recipe_thumbnail" => $this->recipe_thumbnail,
                "recipe_time" => $this->recipe_time,
                "recipe_tag" => $this->recipe_tag,
                "recipe_category_id" => $this->recipe_category_id,
                "recipe_author_id" => $this->recipe_author_id,
                "recipe_isFeature" => $this->recipe_isFeature,
                "recipe_isBanner" => $this->recipe_isBanner,
                "recipe_serving" => $this->recipe_serving,
                "recipe_ingredients" => $this->recipe_ingredients,
                "recipe_instruction" => $this->recipe_instruction,
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblRecipe} set ";
            $sql .= "recipe_is_active = :recipe_is_active, ";
            $sql .= "recipe_datetime = :recipe_datetime ";
            $sql .= "where recipe_aid = :recipe_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRecipe} ";
            $sql .= "where recipe_aid = :recipe_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select recipe_title from {$this->tblRecipe} ";
            $sql .= "where recipe_title = :recipe_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "{$this->recipe_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblRecipe} ";
            $sql .= "where recipe_description = :recipe_description ";
            $sql .= "where recipe_description = :recipe_description ";
            $sql .= "where recipe_description = :recipe_description ";
            $sql .= "order by recipe_title desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_description" => $this->recipe_description,
                "recipe_description" => $this->recipe_description,
                "recipe_description" => $this->recipe_description,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblRecipe} ";
            $sql .= "where ";
            $sql .= "recipe_title like :recipe_title ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "%{$this->recipe_search}%",

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
