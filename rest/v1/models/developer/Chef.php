<?php
class Chef
{
    public $chef_aid;
    public $chef_name;
    public $chef_avatar;
    public $chef_slug;
    public $chef_bio;
    public $chef_fullbio;
    public $chef_is_active;
    public $chef_datetime;
    public $chef_created;

    public $connection;
    public $lastInsertedId;

    public $chef_start;
    public $chef_total;
    public $chef_search;

    public $tblChef;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblChef = "recipe_chef";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblChef} ";
            $sql .= "( chef_name, ";
            $sql .= "chef_avatar, ";
            $sql .= "chef_slug, ";
            $sql .= "chef_bio, ";
            $sql .= "chef_fullbio, ";
            $sql .= "chef_is_active, ";
            $sql .= "chef_datetime, ";
            $sql .= "chef_created ) values ( ";
            $sql .= ":chef_name, ";
            $sql .= ":chef_avatar, ";
            $sql .= ":chef_slug, ";
            $sql .= ":chef_bio, ";
            $sql .= ":chef_fullbio, ";
            $sql .= ":chef_is_active, ";
            $sql .= ":chef_datetime, ";
            $sql .= ":chef_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_name" => $this->chef_name,
                "chef_avatar" => $this->chef_avatar,
                "chef_slug" => $this->chef_slug,
                "chef_bio" => $this->chef_bio,
                "chef_fullbio" => $this->chef_fullbio,
                "chef_is_active" => $this->chef_is_active,
                "chef_datetime" => $this->chef_datetime,
                "chef_created" => $this->chef_created,
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
            $sql .= "{$this->tblChef} ";
            $sql .= "order by chef_is_active desc ";
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
            $sql .= "{$this->tblChef} ";
            $sql .= "order by chef_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->chef_start - 1,
                "total" => $this->chef_total,
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
            $sql .= "{$this->tblChef} ";
            $sql .= "where chef_name like :chef_name ";
            $sql .= "order by chef_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_name" => "%{$this->chef_search}%",
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
            $sql = "select * from {$this->tblChef} ";
            $sql .= "where chef_aid = :chef_aid ";
            $sql .= "order by chef_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_aid" => $this->chef_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function readBySlug()
    {
        try {
            $sql = "select * from {$this->tblChef} ";
            $sql .= "where chef_slug = :chef_slug ";
            $sql .= "order by chef_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_slug" => $this->chef_slug,
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
            $sql = "update {$this->tblChef} set ";
            $sql .= "chef_name = :chef_name, ";
            $sql .= "chef_avatar = :chef_avatar, ";
            $sql .= "chef_slug = :chef_slug, ";
            $sql .= "chef_bio = :chef_bio, ";
            $sql .= "chef_fullbio = :chef_fullbio, ";
            $sql .= "chef_datetime = :chef_datetime ";
            $sql .= "where chef_aid = :chef_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_name" => $this->chef_name,
                "chef_avatar" => $this->chef_avatar,
                "chef_slug" => $this->chef_slug,
                "chef_bio" => $this->chef_bio,
                "chef_fullbio" => $this->chef_fullbio,
                "chef_datetime" => $this->chef_datetime,
                "chef_aid" => $this->chef_aid,
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
            $sql = "update {$this->tblChef} set ";
            $sql .= "chef_is_active = :chef_is_active, ";
            $sql .= "chef_datetime = :chef_datetime ";
            $sql .= "where chef_aid = :chef_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_is_active" => $this->chef_is_active,
                "chef_datetime" => $this->chef_datetime,
                "chef_aid" => $this->chef_aid,
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
            $sql = "delete from {$this->tblChef} ";
            $sql .= "where chef_aid = :chef_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_aid" => $this->chef_aid,
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
            $sql = "select chef_name from {$this->tblChef} ";
            $sql .= "where chef_name = :chef_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_name" => "{$this->chef_name}",
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
            $sql .= "from {$this->tblChef} ";
            $sql .= "where chef_is_active = :chef_is_active ";
            $sql .= "order by chef_name desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_is_active" => $this->chef_is_active,
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
            $sql .= "from {$this->tblChef} ";
            $sql .= "where ";
            $sql .= "chef_is_active = :chef_is_active ";
            $sql .= "and chef_name like :chef_name ";
            $sql .= "order by chef_is_active desc, ";
            $sql .= "chef_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "chef_name" => "%{$this->chef_search}%",
                "chef_is_active" => $this->chef_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
