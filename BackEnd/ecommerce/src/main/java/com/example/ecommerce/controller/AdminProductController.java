package com.example.ecommerce.controller;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.service.CategoryService;
import com.example.ecommerce.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1/admin/product")
public class AdminProductController {

    private final ProductService productService;
    private final CategoryService categoryService;

    public AdminProductController(ProductService productService, CategoryService categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    @PostMapping("/addProduct")
    public ResponseEntity<ProductDTO> addProduct(@RequestParam("title") String title,
                                                 @RequestParam("description") String description,
                                                 @RequestParam("price") int price,
                                                 @RequestParam("quantity") int quantity,
                                                 @RequestParam("brand") String brand,
                                                 @RequestParam("color") String color,
                                                 @RequestParam("imgUrl") String imgUrl,
                                                 @RequestParam("category") String category
    ) {
        Cate category1 = categoryService.findByName(category);
        ProductDTO productDTO = new ProductDTO(title, description, price, quantity, brand, color, imgUrl, category1);
        return ResponseEntity.ok(productService.createProduct(productDTO));
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<ProductDTO> updateProduct( @PathVariable Long productId,
                                                     @RequestParam("title") String title,
                                                     @RequestParam("description") String description,
                                                     @RequestParam("price") int price,
                                                     @RequestParam("quantity") int quantity,
                                                     @RequestParam("brand") String brand,
                                                     @RequestParam("color") String color,
                                                     @RequestParam("imgUrl") String imgUrl,
                                                     @RequestParam("category") String category) throws ProductException {
        Cate category1 = categoryService.findByName(category);
        ProductDTO productDTO = new ProductDTO(title, description, price, quantity, brand, color, imgUrl, category1);
            try {
                return ResponseEntity.ok(productService.updateProduct(productId, productDTO));
            }
            catch (ProductException productException) {
                throw  new ProductException("Update fail");
            }
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId) throws ProductException{
            return ResponseEntity.ok(productService.deleteProduct(productId));
    }
}
