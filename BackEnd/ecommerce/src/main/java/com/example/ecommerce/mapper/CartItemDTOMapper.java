package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.CartItem;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CartItemDTOMapper implements Function<CartItem, CartItemDTO> {
    private final ProductDTOMapper productDTOMapper;

    public CartItemDTOMapper(ProductDTOMapper productDTOMapper) {
        this.productDTOMapper = productDTOMapper;

    }

    @Override
    public CartItemDTO apply(CartItem cartItem) {
        return CartItemDTO.builder()
                .id(cartItem.getId())
                .productDTO(productDTOMapper.apply(cartItem.getProduct()))
                .quantity(cartItem.getQuantity())
                .price(cartItem.getPrice())
                .userId(cartItem.getUserId())
                .build();
    }
}
