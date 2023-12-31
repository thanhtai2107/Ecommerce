package com.example.ecommerce.controller;

import com.example.ecommerce.auth.AuthenticationRequest;
import com.example.ecommerce.auth.AuthenticationRespone;
import com.example.ecommerce.auth.AuthenticationService;
import com.example.ecommerce.auth.RegisterRequest;
import com.example.ecommerce.entity.Role;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class AuthenticationController {

    private final AuthenticationService authenticationService;


    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;

    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationRespone> register(
           @RequestBody RegisterRequest request
    ) {
        try {
            return ResponseEntity.ok(authenticationService.register(request));
        } catch (UserException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        AuthenticationRespone authenticationRespone = authenticationService.authenticate(authenticationRequest);
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, authenticationRespone.getToken()).body(authenticationRespone);
    }
}
