package com.example.ecommerce.service;

import com.example.ecommerce.dto.RatingReq;
import com.example.ecommerce.entity.Rating;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;

import java.util.List;

public interface RatingService {
    Rating creatingRating(RatingReq req, User user) throws ProductException;

    List<Rating> getProductRating(Long productId);

}
