package com.example.ecommerce.dto;

public record CartItemDTO(
        Long productId,
        int quantity,
        int price
) {
}
