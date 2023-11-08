package com.example.ecommerce.dto;

import lombok.Builder;

@Builder
public record CartItemDTO(
    Long id,
    CartDTO cardDTO,
    ProductDTO productDTO,
    int quantity,
    int price,
    Long userId
) {
}
