package com.example.ecommerce.auth;

import com.example.ecommerce.entity.Role;
import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String password;
    private String fullname;
    private Role role;
}
