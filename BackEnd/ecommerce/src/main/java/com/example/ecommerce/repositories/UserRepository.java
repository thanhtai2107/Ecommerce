package com.example.ecommerce.repositories;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    void save(UserDTO userDTO);
}
