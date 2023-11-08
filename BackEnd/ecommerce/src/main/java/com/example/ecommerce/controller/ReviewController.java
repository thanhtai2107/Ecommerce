package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Review;
import com.example.ecommerce.exception.ReviewException;
import com.example.ecommerce.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v2")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/reviews/{id}")
    public ResponseEntity<List<Review>> getReviews(@PathVariable Long id) throws ReviewException {
        try {
            return ResponseEntity.ok(reviewService.getAllReview(id));
        } catch (ReviewException e) {
            throw  new ReviewException("Lỗi");
        }
    }
}
