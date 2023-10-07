package com.example.ecommerce.service;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.UserEntity;

import java.util.Optional;


public interface UserService {
    Optional<UserEntity> findByUsername(String username);
    void save(UserDTO userDTO);
}
