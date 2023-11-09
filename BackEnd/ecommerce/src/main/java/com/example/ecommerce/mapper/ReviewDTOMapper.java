package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.ReviewDTO;
import com.example.ecommerce.entity.Review;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class ReviewDTOMapper implements Function<Review, ReviewDTO> {

    @Override
    public ReviewDTO apply(Review review) {
        return ReviewDTO.builder()
                .comment(review.getReview())
                .numRate(review.getNumRate())
        .build();
    }
}
