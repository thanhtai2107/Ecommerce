package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.Size;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Function;

@Service
public class ProductDTOMapper implements Function<Product, ProductDTO> {

    @Override
    public ProductDTO apply(Product product) {

        return new ProductDTO(
                product.getTitle(),
                product.getDescription(),
                product.getPrice(),
                product.getQuantity(),
                product.getBrand(),
                product.getColor(),
                product.getImgUrl(),
                product.getCate());
    }

    public Product toProduct(ProductDTO productDTO) {
        return Product.builder()
                .title(productDTO.title())
                .description(productDTO.description())
                .price(productDTO.price())
                .quantity(productDTO.quantity())
                .brand(productDTO.brand())
                .color(productDTO.color())
                .imgUrl(productDTO.imgUrl())
                .cate(productDTO.category())
                .build();
    }
}
