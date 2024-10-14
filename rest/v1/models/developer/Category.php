<?php
class Category
{
    public $category_aid;
    public $category_title;
    public $category_photo;
    public $category_url;
    public $category_is_active;
    public $category_datetime;
    public $category_created;

    public $connection;
    public $lastInsertedId;

    public $category_start;
    public $category_total;
    public $category_search;

    public $tblCategory;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCategory = "recipe_category";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCategory} ";
            $sql .= "( category_title, ";
            $sql .= "category_photo, ";
            $sql .= "category_url, ";
            $sql .= "category_is_active, ";
            $sql .= "category_datetime, ";
            $sql .= "category_created ) values ( ";
            $sql .= ":category_title, ";
            $sql .= ":category_photo, ";
            $sql .= ":category_url, ";
            $sql .= ":category_is_active, ";
            $sql .= ":category_datetime, ";
            $sql .= ":category_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => $this->category_title,
                "category_photo" => $this->category_photo,
                "category_url" => $this->category_url,
                "category_is_active" => $this->category_is_active,
                "category_datetime" => $this->category_datetime,
                "category_created" => $this->category_created,
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
            $sql .= "{$this->tblCategory} ";
            $sql .= "order by category_is_active desc ";
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
            $sql .= "{$this->tblCategory} ";
            $sql .= "order by category_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->category_start - 1,
                "total" => $this->category_total,
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
            $sql .= "{$this->tblCategory} ";
            $sql .= "where category_title like :category_title ";
            $sql .= "order by category_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => "%{$this->category_search}%",
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
            $sql = "select * from {$this->tblCategory} ";
            $sql .= "where category_aid = :category_aid ";
            $sql .= "order by category_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_aid" => $this->category_aid,
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
            $sql = "update {$this->tblCategory} set ";
            $sql .= "category_title = :category_title, ";
            $sql .= "category_photo = :category_photo, ";
            $sql .= "category_url = :category_url, ";
            $sql .= "category_datetime = :category_datetime ";
            $sql .= "where category_aid = :category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => $this->category_title,
                "category_photo" => $this->category_photo,
                "category_url" => $this->category_url,
                "category_datetime" => $this->category_datetime,
                "category_aid" => $this->category_aid,
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
            $sql = "update {$this->tblCategory} set ";
            $sql .= "category_is_active = :category_is_active, ";
            $sql .= "category_datetime = :category_datetime ";
            $sql .= "where category_aid = :category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_is_active" => $this->category_is_active,
                "category_datetime" => $this->category_datetime,
                "category_aid" => $this->category_aid,
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
            $sql = "delete from {$this->tblCategory} ";
            $sql .= "where category_aid = :category_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_aid" => $this->category_aid,
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
            $sql = "select category_title from {$this->tblCategory} ";
            $sql .= "where category_title = :category_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => "{$this->category_title}",
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
            $sql .= "from {$this->tblCategory} ";
            $sql .= "where category_is_active = :category_is_active ";
            $sql .= "order by category_title desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_is_active" => $this->category_is_active,
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
            $sql .= "from {$this->tblCategory} ";
            $sql .= "where ";
            $sql .= "category_is_active = :category_is_active ";
            $sql .= "and category_title like :category_title ";
            $sql .= "order by category_is_active desc, ";
            $sql .= "category_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => "%{$this->category_search}%",
                "category_is_active" => $this->category_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
