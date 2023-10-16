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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
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
    public Page<Product> getAllProducts(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, String sort, String stock, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice);
        if (!colors.isEmpty()) {
            products = products.stream().filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
                    .collect(Collectors.toList());
        }
        if (stock != null) {
            if(stock.equals("in_stock")){
                products = products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
            } else if(stock.equals("out_of_stock")) {
                products = products.stream().filter(p -> p.getQuantity() < 1).collect(Collectors.toList());
            }
        }

        int startIndex =  (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

        List<Product> pageContent = products.subList(startIndex, endIndex);
        Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
        return filteredProducts;
    }
}
