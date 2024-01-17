package com.projectapp.apis.services;

import com.projectapp.apis.entity.Student;

import java.util.List;

public interface studentService {

    List<Student> getAllStudent();

    Student postStudent(Student student);

    Student getStudentById(Long id);

    Student updateStudent(Student student ,Long id);

    void deleteStudent(Long id);
}
