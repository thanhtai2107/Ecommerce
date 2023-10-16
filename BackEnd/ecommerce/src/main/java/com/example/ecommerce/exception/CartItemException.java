package com.example.ecommerce.exception;

import com.example.ecommerce.entity.CartItem;

public class CartItemException extends Exception{
    public CartItemException(String mes) {
        super(mes);
    }
}
