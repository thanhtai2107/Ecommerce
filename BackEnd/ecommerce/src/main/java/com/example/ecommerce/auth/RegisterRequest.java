package com.example.ecommerce.auth;

import com.example.ecommerce.entity.Address;
import com.example.ecommerce.entity.Role;
import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String email;
    private String password;
    private String fullname;
    private String phone;
    private Role role;
}
