package com.example.Nivetra.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Nivetra.Model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}
