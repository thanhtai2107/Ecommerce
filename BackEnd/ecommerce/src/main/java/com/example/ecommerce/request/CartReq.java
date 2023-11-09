package com.example.ecommerce.request;

public record CartReq (
    Long userId,
    Long productId,
    int quantity,
    int price){
}
