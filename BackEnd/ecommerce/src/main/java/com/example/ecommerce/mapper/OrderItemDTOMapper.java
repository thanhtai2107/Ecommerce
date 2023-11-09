package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.OrderItemDTO;
import com.example.ecommerce.entity.OrderItem;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class OrderItemDTOMapper implements Function<OrderItem, OrderItemDTO> {
    private final ProductDTOMapper productDTOMapper;

    public OrderItemDTOMapper( ProductDTOMapper productDTOMapper) {

        this.productDTOMapper = productDTOMapper;
    }

    @Override
    public OrderItemDTO apply(OrderItem orderItem) {
        return OrderItemDTO.builder()
                .id(orderItem.getId())
                .productDTO(productDTOMapper.apply(orderItem.getProduct()))
                .quantity(orderItem.getQuantity())
                .price(orderItem.getPrice())
                .userId(orderItem.getUserId())
                .build();
    }
}
