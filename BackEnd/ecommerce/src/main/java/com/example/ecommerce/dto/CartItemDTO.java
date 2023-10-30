package com.example.ecommerce.dto;

public record CartItemDTO(
        Long userId,
        Long productId,
        int quantity,
        int price
) {
}
