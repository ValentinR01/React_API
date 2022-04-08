<?php

namespace App\Entity;
use App\Entity\BaseEntity;

class User extends BaseEntity
{
    private string $username;
    private string $password;
    private string $token;


    public function getUsername(): string
    {
        return $this->username;
    }

    public function setUsername(int $username): void
    {
        $this->username = $username;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    public function getToken(): bool
    {
        return $this->token;
    }

    public function setToken(string $token): void
    {
        $this->token = $token;
    }

}

?>