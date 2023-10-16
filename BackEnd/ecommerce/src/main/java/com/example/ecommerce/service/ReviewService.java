package com.example.ecommerce.service;

import com.example.ecommerce.dto.ReviewReq;
import com.example.ecommerce.entity.Review;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;

import java.util.List;

public interface ReviewService {
    Review createReview(ReviewReq reviewReq, User user) throws ProductException;
    List<Review> getAllReview(Long productId);
}
