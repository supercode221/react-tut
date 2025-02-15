package com.hoanganhdev.todolist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.Map;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TodolistApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolistApplication.class, args);
	}

	@PostMapping("/api/auth/login")
	public ResponseEntity<Map<String, String>> login() {
		return ResponseEntity.ok(Map.of("message", "Login successful"));
	}
}


