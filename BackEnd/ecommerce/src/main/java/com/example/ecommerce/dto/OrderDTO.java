package com.example.ecommerce.dto;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;

@Builder
public record OrderDTO(
        Long id,
        String fullname,
        String email,
        String phone,
        UserDTO userDTO,
        List<OrderItemDTO> orderItemDTOList,
        LocalDateTime localDateTime,
        String shippingAddress,
        int totalPrice,
        String orderStatus,
        int totalItem
        ) {
}
