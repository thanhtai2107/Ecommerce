package com.example.ecommerce.dto;

public record AddItemDTO(
        Long productId,
        String size,
        int quantity,
        int price
) {
}
