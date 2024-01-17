package com.projectapp.apis.controlller;


import com.projectapp.apis.entity.Student;
import com.projectapp.apis.services.studentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private studentServiceImpl studentserviceImpl;

    @GetMapping("/students")
    public List<Student> getAllStudent(){
        return studentserviceImpl.getAllStudent();
    }

    @GetMapping("/get-by-id/{id}")
    public Student getById(@PathVariable  Long id){
        return studentserviceImpl.getStudentById(id);

    }


    @PostMapping("/add")
    public Student postStudent(@RequestBody Student student){
        return studentserviceImpl.postStudent(student);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id){
        studentserviceImpl.deleteStudent(id);
    }
    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student , @PathVariable Long id){
        return studentserviceImpl.updateStudent(student,id);
    }



}
