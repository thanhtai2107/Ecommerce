package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.service.CategoryService;
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

    @PostMapping("/addCategory")
    public ResponseEntity<Cate> addCategory(@RequestParam("category") String category) {
        Cate category1 = new Cate();
        category1.setName(category);
        return ResponseEntity.ok(categoryRepository.save(category1));
    }
    @GetMapping("/getCategory")
    public ResponseEntity<List<Cate>> getCategory() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }
}
