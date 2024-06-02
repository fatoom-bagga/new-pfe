package com.fatimetou.patient.dto;

public class AuthResponseDTO {
    private String accessToken;
//    private String refreshToken;
//    private String tokenType = "Bearer ";

    public AuthResponseDTO(String accessToken) {
        this.accessToken = accessToken;
//        this.refreshToken = refreshToken;
    }
}
