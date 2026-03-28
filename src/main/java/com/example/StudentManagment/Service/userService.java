package com.example.StudentManagment.Service;

import com.example.StudentManagment.Entity.User;
import com.example.StudentManagment.Repository.UserRepository;
import com.example.StudentManagment.dto.RegistrationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class userService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User register(RegistrationRequest request) {

        // ❗ Email duplicate check
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        // ✅ DTO → Entity convert
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User updateUser(Long id , RegistrationRequest request){
        User user = userRepository.findById(id).orElseThrow(()-> new RuntimeException("User not found"));
        user.setName(request.getName());
        user.setEmail(request.getEmail());

        if(request.getPassword()!=null && !request.getPassword().isEmpty()){
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }
        return userRepository.save(user);

    }
    public List<User> searchByName(String name ){
        return userRepository.findByNameContainingIgnoreCase(name);

    }

    public User searchByEmail(String email){
        return userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));
    }

}