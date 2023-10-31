package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    String FILTER_PRODUCT_BY_NAME = "select p from Product p where p.title like concat('%',?1,'%') and p.cate.name = ?2";
    @Query(FILTER_PRODUCT_BY_NAME)
    Page<Product> findByTitleAndCate_Name(String title,String category, Pageable pageable);
}
