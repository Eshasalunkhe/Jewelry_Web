package com.example.Nivetra.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nivetra.Exception.UserAlreadyExistsException;
import com.example.Nivetra.Exception.UserLoginException;
import com.example.Nivetra.Model.User;
import com.example.Nivetra.Repository.UserRepository;
import com.example.Nivetra.Service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;  // ✅ FIX: Inject UserRepository

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.register(user));
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(409).body("⚠️ " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        try {
            return ResponseEntity.ok(userService.login(loginUser.getEmail(), loginUser.getPassword()));
        } catch (UserLoginException e) {
            return ResponseEntity.status(401).body("⚠️ " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Login failed: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        } catch (Exception e) {
            return ResponseEntity.status(404).body("❌ User not found: " + e.getMessage());
        }
    }

    @GetMapping("/is-admin/{userId}")
    public ResponseEntity<Boolean> isAdmin(@PathVariable Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return ResponseEntity.ok("ADMIN".equals(user.get().getRole()));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }
    @GetMapping("/count")
public long getUserCount() {
    return userRepository.count();
}

}
