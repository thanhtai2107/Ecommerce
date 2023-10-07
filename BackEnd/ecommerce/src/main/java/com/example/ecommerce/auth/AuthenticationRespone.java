package com.example.ecommerce.auth;

import com.example.ecommerce.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class AuthenticationRespone {
    private String token;
    private UserEntity user;
}
