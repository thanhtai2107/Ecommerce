package com.example.ecommerce.auth;

import com.example.ecommerce.entity.Address;
import com.example.ecommerce.entity.Role;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.jwt.JWTService;
import com.example.ecommerce.mapper.UserDTOMapper;
import com.example.ecommerce.repositories.AddressRepository;
import com.example.ecommerce.repositories.UserRepository;

import com.example.ecommerce.service.CartService;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    private final CartService cartService;
    private final AddressRepository addressRepository;

    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JWTService jwtService, CartService cartService, AddressRepository addressRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.cartService = cartService;
        this.addressRepository = addressRepository;

    }

    public AuthenticationRespone register(RegisterRequest request) throws UserException {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) throw new UserException("Exist user");
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .fullname(request.getFullname())
                .phone(request.getPhone())
                .role(Role.USER)
                .build();

        User userSaved =userRepository.save(user);
        cartService.createCart(user);
        return new AuthenticationRespone("", null);
    }

    public AuthenticationRespone authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
                authenticationRequest.getPassword()));

        var user = userRepository
                .findByEmail(authenticationRequest.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationRespone(jwtToken, user);
    }
}
