package com.fatimetou.patient.services;

import com.fatimetou.patient.dto.LoginDto;
import com.fatimetou.patient.repositories.UserRepository;
import com.fatimetou.patient.security.JwtService;
import com.fatimetou.patient.entities.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepository userRepository;

    public AuthService(AuthenticationManager authenticationManager, JwtService jwtService, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    public Map<String, String> login(LoginDto authRequestDto) {
        // Authenticate the user using Spring Security's authentication manager
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequestDto.getEmail(), authRequestDto.getPassword()));

        // If authentication is successful, generate and set the JWT token
        if (authentication.isAuthenticated()) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String jwt = jwtService.generateToken(userDetails);

            // Fetch user details from the repository
            User user = userRepository.findByEmail(authRequestDto.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Create response map
            Map<String, String> response = new HashMap<>();
            response.put("accessToken", jwt);
            response.put("role", user.getRole().toString());
            response.put("email", user.getEmail());
            response.put("name", user.getName());

            return response;
        } else {
            throw new RuntimeException("Invalid login credentials");
        }
    }
}
