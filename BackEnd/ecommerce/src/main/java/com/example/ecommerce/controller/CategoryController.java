package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.repositories.CategoryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    @GetMapping("/getCategory")
    public ResponseEntity<List<Cate>> getCategory() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    @GetMapping("/category")
    public ResponseEntity<Cate> getCategoryByName(
            @RequestParam("category") String category
            ) {
        return ResponseEntity.ok(categoryRepository.findCateByName(category));
    }
}
