package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.Address;
import com.example.ecommerce.entity.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserDTOMapper implements Function<User, UserDTO> {

    @Override
    public UserDTO apply(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .fullname(user.getFullname())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRole().toString())
                .build();
    }

    public String convertAddress(Address address) {
        String fullAddress = address.getStreet() + address.getWard() + address.getDistrict() + address.getProvince();
        return fullAddress;
    }
}
