package com.example.ecommerce.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewReq {
    private Long productId;
    private String review;
}
