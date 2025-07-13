package com.example.Nivetra.Dto;

public class OrderItemRequest {
    private ProductId product;
    private int quantity;

    public ProductId getProduct() {
        return product;
    }

    public void setProduct(ProductId product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public static class ProductId {
        private Long id;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }
}
