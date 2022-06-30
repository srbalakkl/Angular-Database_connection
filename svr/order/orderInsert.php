<?php

namespace order;

use PDO;
use PDOException;

class orderInsert
{
    public function __construct()
    {

    }

    function insertDataUsingObjects($data)
    {
//it is our responsibility to handle the db connection with either using set_exception_handler() statement
// or explicitly using the Catch() statement.
// Otherwise, our code will be exposed to public by zendEngine's back trace.
        try {
            $dbh = new pdo('pgsql:host=localhost;dbname=state-table', 'postgres', '123', array(PDO::ATTR_PERSISTENT => true));

//PDO::prepare() and PDOStatement::execute() helps to prevent SQL injection attacks by eliminating the need to manually quote and escape the parameters

            $stmt = $dbh->prepare('INSERT INTO public.food(foodname,fooddescription)VALUES (?,?)');

            $stmt->bindParam(1, $data->foodName);
            $stmt->bindParam(2, $data->fDesc);

            $stmt->execute();

        } catch (PDOException $PDOException) {
            echo $PDOException->getMessage();
        }
        return $data;
    }

}

//todo:use the following command to run this program separately in console.
//$rv = new orderInsert();
//$rv->insertDataUsingObjects();
?>
