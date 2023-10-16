package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> getAllByProductId(Long id);
}
