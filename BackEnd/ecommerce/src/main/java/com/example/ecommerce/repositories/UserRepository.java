package com.example.ecommerce.repositories;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);

    void save(UserDTO userDTO);
}
