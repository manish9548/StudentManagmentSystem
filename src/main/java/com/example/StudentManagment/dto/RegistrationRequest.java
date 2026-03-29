package com.example.StudentManagment.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;
@Data
public class RegistrationRequest {

        @NotBlank(message = "Name is required")
        private String name;
        @NotBlank(message = "email is required")
        private String email;
        @NotBlank(message = "password is required")
        private String password;
    }

