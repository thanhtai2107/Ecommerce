package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.mapper.ProductDTOMapper;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.service.ProductService;
import com.example.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final UserService userService;
    private final CategoryRepository categoryRepository;
    private final ProductDTOMapper productDTOMapper;

    public ProductServiceImpl(ProductRepository productRepository, UserService userService, CategoryRepository categoryRepository, ProductDTOMapper productDTOMapper) {
        this.productRepository = productRepository;
        this.userService = userService;
        this.categoryRepository = categoryRepository;
        this.productDTOMapper = productDTOMapper;
    }

    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Cate category = categoryRepository.findByName(productDTO.category().getName());
        Product product = productDTOMapper.toProduct(productDTO);
        product.setCate(category);
        productRepository.save(product);
        return productDTOMapper.apply(product);
    }

    @Override
    public String deleteProduct(Long idProduct) throws ProductException {
        Product product = findById(idProduct);
        if (product == null) {
            return "Product not found";
        } else {
            productRepository.delete(product);
        }
        return "Deleted";
    }

    @Override
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) throws ProductException {
        Cate category = categoryRepository.findByName(productDTO.category().getName());
        Product product = findById(id);
        product.setTitle(productDTO.title());
        product.setDescription(productDTO.description());
        product.setBrand(productDTO.brand());
        product.setColor(productDTO.color());
        product.setPrice(productDTO.price());
        product.setQuantity(productDTO.quantity());
        product.setImgUrl(productDTO.imgUrl());
        product.setCate(category);
        Product updatedProduct = productRepository.save(product);
        return productDTOMapper.apply(product);
    }

    @Override
    public Product findById(Long id) throws ProductException {
        Optional<Product> opt = productRepository.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw  new ProductException("Product not found with id" + id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return null;
    }

    @Override
    public List<Sort.Order> create(List<String> sortList, String sortDirection) {
        List<Sort.Order> sorts = new ArrayList<>();
        Sort.Direction direction;
        for (String sort: sortList) {
            if(sortDirection != null) {
                direction = Sort.Direction.fromString(sortDirection);
            } else {
                direction = Sort.Direction.DESC;
            }
            sorts.add(new Sort.Order(direction, sort));
        }
        return sorts;
    }

    @Override
    public Page<Product> findAllProducts(String title,String category, int page, int size, List<String> sortList, String sortDirection) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(create(sortList, sortDirection)));
        return productRepository.findByTitleAndCate_Name(title,category, pageable);
    }


}
