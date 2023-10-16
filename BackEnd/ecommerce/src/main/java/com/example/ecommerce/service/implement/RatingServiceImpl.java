package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.RatingReq;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.Rating;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.repositories.RatingRepository;
import com.example.ecommerce.service.ProductService;
import com.example.ecommerce.service.RatingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {
    private final RatingRepository ratingRepository;
    private final ProductService productService;

    public RatingServiceImpl(RatingRepository ratingRepository, ProductService productService) {
        this.ratingRepository = ratingRepository;
        this.productService = productService;
    }

    @Override
    public Rating creatingRating(RatingReq req, User user) throws ProductException {
        Product product = productService.findById(req.getProductId());
        Rating rating = new Rating();
        rating.setNumRate(req.getNumRating());
        rating.setUser(user);
        rating.setProduct(product);
        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProductRating(Long productId) {

        return ratingRepository.getAllByProductId(productId);
    }
}
