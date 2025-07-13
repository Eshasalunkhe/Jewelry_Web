// src/main/java/com/example/Nivetra/Dto/OrderCreationRequest.java
package com.example.Nivetra.Dto;

import java.util.Date;
import java.util.List;

public class OrderCreationRequest {
    private Long userId; // To receive userId directly from frontend
    private double total;
    private String status;
    private Date orderDate;
    private List<OrderItemRequest> items; // List of DTOs for order items

    // No-arg constructor (required for Jackson deserialization)
    public OrderCreationRequest() {}

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public List<OrderItemRequest> getItems() {
        return items;
    }

    public void setItems(List<OrderItemRequest> items) {
        this.items = items;
    }
}