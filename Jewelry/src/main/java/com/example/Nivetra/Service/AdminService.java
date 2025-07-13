package com.example.Nivetra.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Nivetra.Model.Order;
import com.example.Nivetra.Model.User;
import com.example.Nivetra.Repository.OrderRepository;
import com.example.Nivetra.Repository.UserRepository;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    public long getUserCount() {
        return userRepository.count();
    }

    public long getOrderCount() {
        return orderRepository.count();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
