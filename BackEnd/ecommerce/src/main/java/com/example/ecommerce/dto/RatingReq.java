package com.example.ecommerce.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingReq {
    Long productId;
    int numRating;
}
