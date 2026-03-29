package com.example.StudentManagment.Repository;
import java.util.List;

import com.example.StudentManagment.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User , Long> {

    List<User> findByNameContainingIgnoreCase(String name);

    Optional<User> findByEmail(String email);

}
