package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Cate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Cate,Long> {
    public Cate findCateByName(String name);
}
