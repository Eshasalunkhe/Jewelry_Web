// AdminController.java
package com.example.Nivetra.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nivetra.Model.Order;
import com.example.Nivetra.Model.Product;
import com.example.Nivetra.Model.User;
import com.example.Nivetra.Service.OrderService;
import com.example.Nivetra.Service.ProductService;
import com.example.Nivetra.Service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired private ProductService productService;
    @Autowired private UserService userService;
    @Autowired private OrderService orderService;

    // ✅ Get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // ✅ Get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // ✅ Get all orders
    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    // ✅ Get total users
    @GetMapping("/users/count")
    public long getUserCount() {
        return userService.countUsers();
    }

    // ✅ Get total orders
    @GetMapping("/orders/count")
    public long getOrderCount() {
        return orderService.countOrders();
    }

    // ✅ Delete product
    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    // ✅ Delete order
    @DeleteMapping("/orders/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

    // ✅ Delete user
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
