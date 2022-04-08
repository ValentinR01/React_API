<?php

namespace App\Manager;

use App\Manager\BaseManager;
use App\Entity\User;
use App\Factory\PDOFactory;


class UserManager extends BaseManager {

    public function addUser(user $user): bool
    {
        $query = $this->pdo->prepare('INSERT INTO ' . PDOFactory::DATABASE . '.users (username, password, token) VALUES (:username, :password, :token)');
        $query->bindValue(':username', $user->getUsername(), \PDO::PARAM_STR);
        $query->bindValue(':password', $user->getPassword(), \PDO::PARAM_STR);
        $query->bindValue(':token', $user->getToken(), \PDO::PARAM_BOOL);
        return $query->execute();
    }
}



?>