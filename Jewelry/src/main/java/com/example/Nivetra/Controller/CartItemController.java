package com.example.Nivetra.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nivetra.Model.CartItem;
import com.example.Nivetra.Service.CartItemService;

@CrossOrigin(origins = "http://localhost:4200") // ✅ IMPORTANT for frontend to connect
@RestController
@RequestMapping("/api/cart")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping
    public ResponseEntity<?> addToCart(@RequestBody CartItem item) {
        try {
            CartItem saved = cartItemService.addToCart(item);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to add item to cart: " + e.getMessage());
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getCartItems(@PathVariable Long userId) {
        try {
            List<CartItem> items = cartItemService.getCartItemsByUserId(userId);
            return ResponseEntity.ok(items);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to get cart items: " + e.getMessage());
        }
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<?> deleteItem(@PathVariable Long itemId) {
        try {
            cartItemService.removeItem(itemId);
            return ResponseEntity.ok("✅ Item removed");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to remove item: " + e.getMessage());
        }
    }

    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<?> clearCart(@PathVariable Long userId) {
        try {
            cartItemService.clearCart(userId);
            return ResponseEntity.ok("✅ Cart cleared");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to clear cart: " + e.getMessage());
        }
    }
}
