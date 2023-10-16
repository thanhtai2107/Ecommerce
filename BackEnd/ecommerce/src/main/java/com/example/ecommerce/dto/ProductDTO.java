package com.example.ecommerce.dto;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.entity.Size;
import java.util.Set;

public record ProductDTO(
        String title,
        String description,
        int price,
        int quantity,
        String brand,
        String color,

        String imgUrl,
        Cate category
) {
}
