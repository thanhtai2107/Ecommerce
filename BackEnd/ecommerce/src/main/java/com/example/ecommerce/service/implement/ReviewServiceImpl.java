package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.ReviewReq;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.Review;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.repositories.ReviewRepository;
import com.example.ecommerce.service.ProductService;
import com.example.ecommerce.service.ReviewService;

import java.util.List;

public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductService productService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
    }

    @Override
    public Review createReview(ReviewReq reviewReq, User user) throws ProductException {
        Product product = productService.findById(reviewReq.getProductId());
        Review review = new Review();
        review.setReview(review.getReview());
        review.setProduct(product);
        review.setUser(user);
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllByProductId(productId);
    }
}
