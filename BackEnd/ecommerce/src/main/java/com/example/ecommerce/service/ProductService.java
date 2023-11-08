package com.example.ecommerce.service;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.exception.ProductException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    String deleteProduct(Long idProduct) throws ProductException;
    ProductDTO updateProduct(Long id, ProductDTO productDTO) throws ProductException;
    ProductDTO findById(Long id) throws ProductException;
    List<Product> findProductByCategory(String category);
    List<ProductDTO> findAll();
    List<Sort.Order> create(List<String> sortList, String sortDirection);
    Page<ProductDTO> findAllProducts(String title,String category, int page, int size,List<String> sortList, String sortDirection);
    Page<ProductDTO> findProductByTitle(String title,int page, int size,List<String> sortList, String sortDirection);
}
