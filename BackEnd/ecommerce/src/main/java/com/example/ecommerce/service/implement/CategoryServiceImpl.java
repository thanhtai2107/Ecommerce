package com.example.ecommerce.service.implement;

import com.example.ecommerce.entity.Cate;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.service.CategoryService;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Cate findByName(String categoryName) {
        return categoryRepository.findCateByName(categoryName);
    }
}
