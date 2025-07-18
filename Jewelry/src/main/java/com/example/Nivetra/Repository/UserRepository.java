package com.example.Nivetra.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Nivetra.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
