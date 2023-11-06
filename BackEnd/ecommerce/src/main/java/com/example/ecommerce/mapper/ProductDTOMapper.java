package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.ProductDTO;
import com.example.ecommerce.entity.Img;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.Size;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Function;

@Service
public class ProductDTOMapper implements Function<Product, ProductDTO> {

    @Override
    public ProductDTO apply(Product product) {

        return new ProductDTO(
                product.getId(),
                product.getTitle(),
                product.getDescription(),
                product.getPrice(),
                product.getQuantity(),
                product.getSold(),
                product.getBrand(),
                convertImgToString(product.getImgs()),
                product.getCate()
                )
        ;
    }
    public List<String> convertImgToString(List<Img> imgList) {
        List<String> imgs = new ArrayList<>();
        for (Img img : imgList) {
            imgs.add(img.getUrl());
        }
        return imgs;
    }

    public Product toProduct(ProductDTO productDTO) {
        return Product.builder()
                .title(productDTO.title())
                .description(productDTO.description())
                .price(productDTO.price())
                .quantity(productDTO.quantity())
                .sold(productDTO.sold())
                .brand(productDTO.brand())
                .cate(productDTO.category())
                .build();
    }
}
