package com.example.ecommerce.service;

import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.exception.UserException;

import java.util.List;
import java.util.Optional;


public interface UserService {
    Optional<User> findByUsername(String username);

    UserDTO findUserById(Long id) throws UserException;
    List<UserDTO> findAllUser() throws UserException;
    List<OrderDTO> findOrdersByUser(Long userId) throws OrderException;
}
