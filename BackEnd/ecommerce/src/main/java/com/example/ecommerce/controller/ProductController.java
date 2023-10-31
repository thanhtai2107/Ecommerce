package com.example.ecommerce.controller;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.service.CategoryService;
import com.example.ecommerce.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v2/")
public class ProductController {
    private final ProductService productService;
    private final CategoryService categoryService;

    private final ProductRepository productRepository;


    public ProductController(ProductService productService, CategoryService categoryService, ProductRepository productRepository) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.productRepository = productRepository;
    }

//    @GetMapping("/products")
//    public ResponseEntity<Page<Product>> findProductsByCategory(@RequestParam String category,
//                                                                @RequestParam Integer minPrice,
//                                                                @RequestParam Integer maxPrice,
//                                                                @RequestParam Integer pageNumber,
//                                                                @RequestParam Integer pageSize) {
//        return ResponseEntity.ok(productService.getAllProducts(category, minPrice, maxPrice,pageNumber, pageSize));
//    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(productRepository.findAll());
    }
    @GetMapping("product/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Long id) throws ProductException {
        return ResponseEntity.ok(productService.findById(id));
    }
    @GetMapping("/productPage")
    public ResponseEntity<Page<Product>> getAll(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "") String category,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "2") int size,
            @RequestParam(defaultValue = "") List<String> sortList,
            @RequestParam(defaultValue = "DESC") Sort.Direction sortDirection
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(productService.findAllProducts(title,category,page, size,sortList, sortDirection.toString()));
    }
}
