package com.example.ecommerce.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewReq {
    private Long productId;
    private int numRate;
    private String review;
    private Long userId;
}
