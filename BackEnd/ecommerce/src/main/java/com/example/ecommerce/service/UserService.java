package com.example.ecommerce.service;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.UserException;

import java.util.Optional;


public interface UserService {
    Optional<User> findByUsername(String username);
    void save(UserDTO userDTO);

    User findUserById(Long id) throws UserException;
}
