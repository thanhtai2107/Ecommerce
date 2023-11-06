package com.example.ecommerce.controller;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.entity.Img;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.repositories.ImgRepository;
import com.example.ecommerce.service.CategoryService;
import com.example.ecommerce.service.CloudinaryService;
import com.example.ecommerce.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1/admin")
public class AdminProductController {

    private final ProductService productService;
    private final CategoryService categoryService;
    private final CloudinaryService cloudinaryService;


    public AdminProductController(ProductService productService, CategoryService categoryService, CloudinaryService cloudinaryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.cloudinaryService = cloudinaryService;
    }

    @PostMapping("/addProduct")
    public ResponseEntity<ProductDTO> addProduct(@RequestParam("title") String title,
                                                 @RequestParam("description") String description,
                                                 @RequestParam("price") int price,
                                                 @RequestParam("quantity") int quantity,
                                                 @RequestParam("brand") String brand,
                                                 @RequestParam("imgUrl") List<MultipartFile> imgs,
                                                 @RequestParam("category") String categoryName
    ) throws IOException {
        Cate category1 = categoryService.findByName(categoryName);
        List<String> imgUrls = new ArrayList<>();
        if (imgs != null) {
            for (MultipartFile multipartFile : imgs) {
                imgUrls.add(cloudinaryService.uploadImg(multipartFile));
            };
        }
        ProductDTO productDTO = ProductDTO.builder()
                .title(title)
                .description(description)
                .price(price)
                .quantity(quantity)
                .brand(brand)
                .imgs(imgUrls)
                .category(category1)
                .build();
        ProductDTO saveProduct = productService.createProduct(productDTO);
        if (saveProduct == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } else {
            return ResponseEntity.status(HttpStatus.CREATED).body(saveProduct);
        }
    }

    @PutMapping("/updateProduct/{productId}")
    public ResponseEntity<ProductDTO> updateProduct( @PathVariable Long productId,
                                                     @RequestParam("title") String title,
                                                     @RequestParam("description") String description,
                                                     @RequestParam("price") int price,
                                                     @RequestParam("quantity") int quantity,
                                                     @RequestParam("brand") String brand,
                                                     @RequestParam(value = "imgUrl",required = false) List<MultipartFile> imgs,
                                                     @RequestParam("category") String category) throws ProductException, IOException {
        Cate category1 = categoryService.findByName(category);
        List<String> imgUrls = new ArrayList<>();
        if (imgs != null) {
            for (MultipartFile multipartFile : imgs) {
                imgUrls.add(cloudinaryService.uploadImg(multipartFile));
            };
        }
        ProductDTO productDTO = ProductDTO.builder()
                .title(title)
                .description(description)
                .price(price)
                .quantity(quantity)
                .brand(brand)
                .imgs(imgUrls)
                .category(category1)
                .build();
            try {
                return ResponseEntity.ok(productService.updateProduct(productId, productDTO));
            }
            catch (ProductException productException) {
                throw  new ProductException("Update fail");
            }
    }

    @DeleteMapping("/deleteProduct/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId) throws ProductException {
        return ResponseEntity.ok(productService.deleteProduct(productId));
    }
}
