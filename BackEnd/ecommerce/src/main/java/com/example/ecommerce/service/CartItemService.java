package com.example.ecommerce.service;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.exception.CartItemException;
import com.example.ecommerce.exception.UserException;

public interface CartItemService {
    CartItem createCartItem(CartItem cartItem);

    CartItem updateCartItem(Long id, Long userId, CartItem cartItem) throws CartItemException, UserException;

    CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);

    void deleteCartItem(Long id, Long userId) throws CartItemException, UserException;

    CartItem findCartItemById(Long id) throws CartItemException;
}
