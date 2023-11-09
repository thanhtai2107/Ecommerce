package com.example.ecommerce.service;

import com.example.ecommerce.exception.ReviewException;
import com.example.ecommerce.request.ReviewReq;
import com.example.ecommerce.entity.Review;

import java.util.List;

public interface ReviewService {
    Review createReview(ReviewReq reviewReq) throws ReviewException;
    List<Review> getAllReview(Long productId) throws ReviewException;
}
