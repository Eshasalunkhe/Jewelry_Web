package com.example.Nivetra.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Nivetra.Model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUserId(Long userId);
    void deleteByUserId(Long userId);
}

