package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.entity.Img;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.mapper.ProductDTOMapper;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.repositories.ImgRepository;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.service.CloudinaryService;
import com.example.ecommerce.service.ProductService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;


@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ImgRepository imgRepository;
    private final CategoryRepository categoryRepository;
    private final ProductDTOMapper productDTOMapper;

    public ProductServiceImpl(ProductRepository productRepository, ImgRepository imgRepository, CategoryRepository categoryRepository, ProductDTOMapper productDTOMapper) {
        this.productRepository = productRepository;
        this.imgRepository = imgRepository;
        this.categoryRepository = categoryRepository;
        this.productDTOMapper = productDTOMapper;
    }

    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = productDTOMapper.toProduct(productDTO);
        product.setLocalDateTime(LocalDateTime.now());
        Product productSaved = productRepository.save(product);
        List<Img> imgList = new ArrayList<>();
        for (String imgUrl : productDTO.imgs()) {
            imgList.add(
                    imgRepository.save(Img.builder()
                            .product(productSaved)
                            .url(imgUrl)
                            .build()));
        }
        productSaved.setImgs(imgList);
        return productDTOMapper.apply(productSaved);
    }

    @Override
    public String deleteProduct(Long idProduct) throws ProductException {
        Product product = productRepository.findProductById(idProduct);
        if (product == null) {
            return "Product not found";
        } else {
            productRepository.delete(product);
        }
        return "Deleted";
    }

    @Override
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) throws ProductException {
        Cate category = categoryRepository.findCateByName(productDTO.category().getName());
        Product product = productRepository.findProductById(id);
        List<Img> imgList = new ArrayList<>();
        if (productDTO.imgs().size() > 0) {
            for (String imgUrl : productDTO.imgs()) {

                Img img = imgRepository.save(Img.builder()
                        .product(product)
                        .url(imgUrl)
                        .build());
                imgList.add(img);
            }
            product.setImgs(imgList);
        }
        product.setTitle(productDTO.title());
        product.setDescription(productDTO.description());
        product.setBrand(productDTO.brand());
        product.setPrice(productDTO.price());
        product.setQuantity(productDTO.quantity());
        product.setCate(category);
        Product updatedProduct = productRepository.save(product);
        return productDTOMapper.apply(updatedProduct);
    }

    @Override
    public ProductDTO findById(Long id) throws ProductException {
        Optional<Product> opt = productRepository.findById(id);
        if (opt.isPresent()) {
            return productDTOMapper.apply(opt.get());
        }
        throw new ProductException("Product not found with id" + id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return null;
    }

    @Override
    public List<ProductDTO> findAll() {
        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOS = new ArrayList<>();
        for (Product product : products) {
            productDTOS.add(productDTOMapper.apply(product));
        }
        return productDTOS;
    }

    @Override
    public List<Sort.Order> create(List<String> sortList, String sortDirection) {
        List<Sort.Order> sorts = new ArrayList<>();
        Sort.Direction direction;
        for (String sort : sortList) {
            if (sortDirection != null) {
                direction = Sort.Direction.fromString(sortDirection);
            } else {
                direction = Sort.Direction.DESC;
            }
            sorts.add(new Sort.Order(direction, sort));
        }
        return sorts;
    }

    @Override
    public Page<ProductDTO> findAllProducts(String title, String category, int page, int size, List<String> sortList, String sortDirection) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(create(sortList, sortDirection)));
        Page<Product> allProductsEntity = productRepository.findByTitleAndCate_Name(title, category, pageable);
        Page<ProductDTO> allProducts = allProductsEntity.map(new Function<Product, ProductDTO>() {
            @Override
            public ProductDTO apply(Product product) {
                return productDTOMapper.apply(product);
            }
        });
        return allProducts;
    }

    @Override
    public Page<ProductDTO> findProductByTitle(String title, int page, int size, List<String> sortList, String sortDirection) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(create(sortList, sortDirection)));
        Page<Product> allProductsEntity = productRepository.findProductByTitle(title, pageable);
        Page<ProductDTO> allProducts = allProductsEntity.map(new Function<Product, ProductDTO>() {
            @Override
            public ProductDTO apply(Product product) {
                return productDTOMapper.apply(product);
            }
        });
        return allProducts;
    }


}
