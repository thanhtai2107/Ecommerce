package com.example.ecommerce.service;

import com.example.ecommerce.entity.Cate;

public interface CategoryService {
    Cate findByName(String categoryName);

    Cate updateCategory(Long categoryId, String name);
}
