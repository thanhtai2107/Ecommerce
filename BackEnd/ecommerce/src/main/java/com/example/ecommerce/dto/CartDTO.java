package com.example.ecommerce.dto;

import lombok.Builder;

import java.util.Set;

@Builder
public record CartDTO(
        Long id,
        UserDTO userDTO,
        Set<CartItemDTO> cartItemDTOS,
        int totalPrice,
        int totalItem
){
}


