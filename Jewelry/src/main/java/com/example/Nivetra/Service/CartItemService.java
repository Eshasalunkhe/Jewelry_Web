package com.example.Nivetra.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Nivetra.Model.CartItem;
import com.example.Nivetra.Model.Product;
import com.example.Nivetra.Model.User;
import com.example.Nivetra.Repository.CartItemRepository;
import com.example.Nivetra.Repository.ProductRepository;
import com.example.Nivetra.Repository.UserRepository;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public CartItem addToCart(CartItem item) {
        User user = userRepository.findById(item.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(item.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        item.setUser(user);
        item.setProduct(product);

        return cartItemRepository.save(item);
    }

    public List<CartItem> getCartItemsByUserId(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public void removeItem(Long id) {
        cartItemRepository.deleteById(id);
    }

    public void clearCart(Long userId) {
        cartItemRepository.deleteByUserId(userId);
    }
}
