package com.example.ecommerce.dto;

import lombok.Builder;

@Builder
public record ReviewDTO(
        Long id,
        String comment,
        int numRate,
        ProductDTO productDTO,
        UserDTO userDTO
) {
}
