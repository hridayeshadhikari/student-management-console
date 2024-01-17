package com.projectapp.apis.repository;

import com.projectapp.apis.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MyRepository extends JpaRepository<Student,Long> {
    Optional<Student> findByEmail(String email);
}
