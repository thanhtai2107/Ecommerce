package com.example.ecommerce.service;

import com.example.ecommerce.dto.CartDTO;
import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.request.CartReq;

public interface CartService {
    Cart createCart(User user);
    String addCartItem( CartReq request) throws ProductException;
    CartDTO findUserCart(Long userId);
}
