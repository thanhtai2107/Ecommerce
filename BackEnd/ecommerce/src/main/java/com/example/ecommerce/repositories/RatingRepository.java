package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> getAllByProductId (Long productId);
}
