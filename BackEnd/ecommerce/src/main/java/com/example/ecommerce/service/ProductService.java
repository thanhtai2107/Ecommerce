package com.example.ecommerce.service;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.exception.ProductException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    String deleteProduct(Long idProduct) throws ProductException;
    ProductDTO updateProduct(Long id, ProductDTO productDTO) throws ProductException;
    Product findById(Long id) throws ProductException;
    List<Product> findProductByCategory(String category);
    Page<Product> getAllProducts(String category, List<String> color, List<String> size, Integer minPrice, Integer maxPrice
    , String sort, String stock, Integer pageNumber, Integer pageSize );

}
