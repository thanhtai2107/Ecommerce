package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Product;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.service.CategoryService;
import com.example.ecommerce.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ProductController {
    private final ProductService productService;
    private final CategoryService categoryService;

    private final ProductRepository productRepository;


    public ProductController(ProductService productService, CategoryService categoryService, ProductRepository productRepository) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.productRepository = productRepository;
    }

    @GetMapping("/produts")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }
}
