package com.example.Nivetra.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nivetra.Dto.PlaceOrderRequest;
import com.example.Nivetra.Model.Order;
import com.example.Nivetra.Repository.OrderRepository;
import com.example.Nivetra.Service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")  // Optional: for Angular access
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderRepository orderRepository;  // ✅ Fix: declare and inject orderRepository

    // ✅ Create a new order
    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody PlaceOrderRequest request) {
        try {
            Order savedOrder = orderService.placeOrder(request);
            return ResponseEntity.ok(savedOrder);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to create order: " + e.getMessage());
        }
    }

    // ✅ Get all orders
    @GetMapping
    public ResponseEntity<?> getAllOrders() {
        try {
            List<Order> orders = orderService.getAllOrders();
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to fetch orders: " + e.getMessage());
        }
    }

    // ✅ Get orders by user ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserOrders(@PathVariable Long userId) {
        try {
            List<Order> userOrders = orderService.getOrdersByUserId(userId);
            return ResponseEntity.ok(userOrders);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to fetch user orders: " + e.getMessage());
        }
    }

    // ✅ Total order count
    @GetMapping("/count")
    public long getOrderCount() {
        return orderRepository.count();
    }
}
