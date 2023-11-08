package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.CartDTO;
import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Function;

@Service
public class CartDTOMapper implements Function<Cart, CartDTO> {
    private final UserDTOMapper userDTOMapper;
    private final CartItemDTOMapper cartItemDTOMapper;

    public CartDTOMapper(UserDTOMapper userDTOMapper, CartItemDTOMapper cartItemDTOMapper) {
        this.userDTOMapper = userDTOMapper;

        this.cartItemDTOMapper = cartItemDTOMapper;
    }

    @Override
    public CartDTO apply(Cart cart) {
        return CartDTO.builder()
                .id(cart.getId())
                .userDTO(userDTOMapper.apply(cart.getUser()))
                .cartItemDTOS(cartItemDTOS(cart.getCartItems()))
                .totalPrice(cart.getTotalPrice())
                .totalItem(cart.getTotalItem())
                .build();
    }

    public Set<CartItemDTO> cartItemDTOS(Set<CartItem> cartItems) {
        Set<CartItemDTO> cartItemDTOS = new HashSet<>();
        for (CartItem cartItem: cartItems) {
            cartItemDTOS.add(cartItemDTOMapper.apply(cartItem));
        }
        return cartItemDTOS;
    }
}
