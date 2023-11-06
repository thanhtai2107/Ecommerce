package com.example.ecommerce.dto;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.entity.Img;
import com.example.ecommerce.entity.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Builder

public record ProductDTO(
        Long id,
        String title,
        String description,
        int price,
        int quantity,
        int sold,
        String brand,
        List<String> imgs,
        Cate category
) {
}
