<?php
function checkSlug($object)
{
    $query = $object->readbyslug();
    checkQuery($query, "There's a problem processing your request. (read slug)");
    return $query;
}
