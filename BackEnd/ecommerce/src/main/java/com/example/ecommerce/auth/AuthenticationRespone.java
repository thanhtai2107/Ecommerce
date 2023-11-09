package com.example.ecommerce.auth;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.User;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class AuthenticationRespone {
    private String token;
    private User user;
}
