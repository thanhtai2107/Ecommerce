package com.example.ecommerce.dto;
import lombok.Builder;

@Builder
public record OrderItemDTO(
        Long id,
        OrderDTO orderDTO,
        ProductDTO productDTO,
        int quantity,
        int price,
        Long userId
) {
}
