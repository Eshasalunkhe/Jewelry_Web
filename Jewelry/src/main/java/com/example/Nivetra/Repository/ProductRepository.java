// src/main/java/com.example/Nivetra/Repository/ProductRepository.java
package com.example.Nivetra.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Nivetra.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}