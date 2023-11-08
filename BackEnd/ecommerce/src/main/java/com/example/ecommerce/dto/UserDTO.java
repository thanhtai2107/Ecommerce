package com.example.ecommerce.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserDTO {
    private Long id;
    private String email;
    private String fullname;
    private String address;
    private String phone;
    private String role;
}
