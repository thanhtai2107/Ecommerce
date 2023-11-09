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
@RequestMapping("/api/v2")
public class ProductController {
    private final ProductService productService;

    private final ProductRepository productRepository;


    public ProductController(ProductService productService, ProductRepository productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
    }



    @GetMapping("/product")
    public ResponseEntity<Page<ProductDTO>> getProductByTitle(@RequestParam String title,
                                                           @RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "2") int size,
                                                           @RequestParam(defaultValue = "") List<String> sortList,
                                                           @RequestParam(defaultValue = "DESC") Sort.Direction sortDirection) {
        return ResponseEntity.ok(productService.findProductByTitle(title, page, size, sortList, sortDirection.toString()));
    }
    @GetMapping("product/{id}")
    public ResponseEntity<ProductDTO> findProductById(@PathVariable Long id) throws ProductException {
        return ResponseEntity.ok(productService.findById(id));
    }
    @GetMapping("/products")
    public ResponseEntity<Page<ProductDTO>> getAll(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "") String category,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "2") int size,
            @RequestParam(defaultValue = "") List<String> sortList,
            @RequestParam(defaultValue = "DESC") Sort.Direction sortDirection
    ) {

        return ResponseEntity.ok(productService.findAllProducts(title,category,page, size,sortList, sortDirection.toString()));
    }

    @GetMapping("/allproduct")
    public ResponseEntity<List<ProductDTO>> getAllProduct() {
        return ResponseEntity.ok(productService.findAll());
    }
}
