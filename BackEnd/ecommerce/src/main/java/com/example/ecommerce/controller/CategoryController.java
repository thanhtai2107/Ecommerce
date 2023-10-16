package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @PostMapping("/addCategory")
    public ResponseEntity<Cate> addCategory(@RequestParam("category") String category) {
        Cate category1 = new Cate();
        category1.setName(category);
        return ResponseEntity.ok(categoryRepository.save(category1));
    }
}
