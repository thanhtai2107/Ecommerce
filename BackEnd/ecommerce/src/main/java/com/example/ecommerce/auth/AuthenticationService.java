package com.example.ecommerce.auth;

import com.example.ecommerce.entity.Role;
import com.example.ecommerce.entity.UserEntity;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.jwt.JWTService;
import com.example.ecommerce.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    public AuthenticationRespone register(RegisterRequest request) throws UserException {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) throw new UserException();
        var user = UserEntity.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .fullname(request.getFullname())
                .role(Role.USER)
                .build();
        userRepository.save(user);
        return new AuthenticationRespone("", null);
    }

    public AuthenticationRespone authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                authenticationRequest.getPassword()));

        var user = userRepository
                .findByUsername(authenticationRequest.getUsername()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationRespone(jwtToken, user);
    }
}
