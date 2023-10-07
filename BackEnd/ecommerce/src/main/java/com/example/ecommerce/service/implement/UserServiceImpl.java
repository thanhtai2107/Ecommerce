package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.UserEntity;
import com.example.ecommerce.repositories.UserRepository;
import com.example.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Override
    public Optional<UserEntity> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void save(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
//        UserEntity user = new UserEntity(userDTO.getUsername(), userDTO.getPassword(), userDTO.getFullname());
        userRepository.save(userDTO);
    }
}
