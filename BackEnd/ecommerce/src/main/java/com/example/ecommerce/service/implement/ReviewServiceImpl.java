package com.example.ecommerce.service.implement;

import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ReviewException;
import com.example.ecommerce.repositories.UserRepository;
import com.example.ecommerce.request.ReviewReq;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.Review;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.repositories.ReviewRepository;
import com.example.ecommerce.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;

        this.userRepository = userRepository;
    }

    @Override
    public Review createReview(ReviewReq reviewReq) throws ReviewException {
        Product product = productRepository.findProductById(reviewReq.getProductId());
        User user = userRepository.findUserById(reviewReq.getUserId());
        Review review = new Review();
        review.setReview(reviewReq.getReview());
        review.setNumRate(reviewReq.getNumRate());
        review.setProduct(product);
        review.setUser(user);
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllByProductId(productId);
    }
}
