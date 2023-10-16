package com.example.ecommerce.service;

import com.example.ecommerce.dto.AddItemDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;

public interface CartService {
    Cart createCart(User user);
    String addCartItem(Long userId, AddItemDTO request) throws ProductException;

    Cart findUserCart(Long userId);
}
