package com.example.ecommerce.service;

import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;

public interface CartService {
    Cart createCart(User user);
    String addCartItem( CartItemDTO request) throws ProductException;

    Cart findUserCart(Long userId);
}
