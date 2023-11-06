package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    String FILTER_PRODUCT_BY_NAME_AND_CATEGORY = "select p from Product p where p.title like concat('%',?1,'%') and p.cate.name = ?2";
    String FILTER_PRODUCT_BY_NAME = "select p from Product p where p.title like concat('%',?1,'%')";
    @Query(FILTER_PRODUCT_BY_NAME_AND_CATEGORY)
    Page<Product> findByTitleAndCate_Name(String title,String category, Pageable pageable);

    @Query(FILTER_PRODUCT_BY_NAME)
    Page<Product> findProductByTitle(String title, Pageable pageable);

    List<Product> findAllByTitleContaining(String title);

    Product findProductById(Long id);
}
