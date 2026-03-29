package com.example.StudentManagment.Controller;

import com.example.StudentManagment.Entity.User;
import com.example.StudentManagment.Service.userService;
import com.example.StudentManagment.dto.RegistrationRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class userController {

    private final userService userService;

    @PostMapping("/auth/register")
    public ResponseEntity<User> register(@Valid @RequestBody RegistrationRequest registrationRequest) {
        return ResponseEntity.ok(userService.register(registrationRequest));
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id , @RequestBody RegistrationRequest registrationRequest) {
        return userService.updateUser(id ,registrationRequest);

    }
    @GetMapping("/users/search")
    public List<User> searchByName(@RequestParam String name ){
        return userService.searchByName(name);

    }

    public User searchByEmail(@RequestParam String email){
        return userService.searchByEmail(email);


    }
}