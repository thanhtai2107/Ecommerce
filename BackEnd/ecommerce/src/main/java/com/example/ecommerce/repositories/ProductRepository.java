package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query("SELECT p FROM Product p " +
            "WHERE (p.cate.name=:category OR :category='')" +
            "AND (:minPrice IS NULL AND :maxPrice IS NULL)"
    )
    public List<Product> filterProducts(@Param("category") String category,
                                        @Param("minPrice") Integer minPrice,
                                        @Param("maxPrice") Integer maxPrice

                                        );
}
