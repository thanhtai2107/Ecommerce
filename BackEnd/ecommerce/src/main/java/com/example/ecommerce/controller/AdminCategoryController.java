package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1/admin")
public class AdminCategoryController {

    private final CategoryRepository categoryRepository;
    private final CategoryService categoryService;

    public AdminCategoryController(CategoryRepository categoryRepository, CategoryService categoryService) {
        this.categoryRepository = categoryRepository;
        this.categoryService = categoryService;
    }

    @PostMapping("/addCategory")
    public ResponseEntity<Cate> addCategory(@RequestParam("category") String category) {
        Cate category1 = new Cate();
        category1.setName(category);
        return ResponseEntity.ok(categoryRepository.save(category1));
    }

    @PutMapping("/update/category/{id}")
    public ResponseEntity<Cate> updateCategory(@PathVariable Long id, @RequestParam("category") String category) {

        return ResponseEntity.ok(categoryService.updateCategory(id, category));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Cate> getCategory(@PathVariable Long id) {
        return ResponseEntity.ok(categoryRepository.findCateById(id));
    }
}
