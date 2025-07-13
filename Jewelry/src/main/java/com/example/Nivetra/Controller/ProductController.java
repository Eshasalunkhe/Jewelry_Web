package com.example.Nivetra.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nivetra.Model.Product;
import com.example.Nivetra.Service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // ✅ Add Product (mapped to /api/products/add for consistency with Angular call)
 @PostMapping
public ResponseEntity<?> addProduct(@RequestBody Product product) {
    System.out.println("Received product: " + product);
    try {
        Product savedProduct = productService.addProduct(product);
        return ResponseEntity.ok(savedProduct);
    } catch (Exception e) {
        e.printStackTrace(); // ← show detailed error in terminal
        return ResponseEntity.badRequest().body("Failed to add product: " + e.getMessage());
    }
}

    // ✅ Get all products
    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        try {
            List<Product> products = productService.getAllProducts();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to fetch products: " + e.getMessage());
        }
    }

    // ✅ Get product by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        try {
            Product product = productService.getProduct(id);
            return ResponseEntity.ok(product);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Product not found: " + e.getMessage());
        }
    }

    // ✅ Update product
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        try {
            Product updated = productService.updateProduct(id, updatedProduct);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to update product: " + e.getMessage());
        }
    }

    // ✅ Delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok("✅ Product deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Failed to delete product: " + e.getMessage());
        }
    }
}
