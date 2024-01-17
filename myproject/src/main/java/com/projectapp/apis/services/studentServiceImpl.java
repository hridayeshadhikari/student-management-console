package com.projectapp.apis.services;

import com.projectapp.apis.entity.Student;
import com.projectapp.apis.exception.StudentNotFoundException;
import com.projectapp.apis.exception.studentAlreadyExistException;
import com.projectapp.apis.repository.MyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class studentServiceImpl implements studentService{

    @Autowired
    private MyRepository myRepository;
    @Override
    public List<Student> getAllStudent() {
        return myRepository.findAll();
    }

    @Override
    public Student postStudent(Student student) {
        if(studentAlreadyExist(student.getEmail())){
            throw new studentAlreadyExistException(student.getEmail()+"student already exist");
        }
        return myRepository.save(student);
    }

    @Override
    public Student getStudentById(Long id) {
        return myRepository.findById(id).orElseThrow(()->
            new StudentNotFoundException("student not found")
        );
    }

    @Override
    public Student updateStudent(Student student, Long id)
    {
        return myRepository.findById(id).map(st ->{
                st.setFirstname(student.getFirstname());
                st.setLastname(student.getLastname());
                st.setEmail(student.getEmail());
                st.setDepartment(student.getDepartment());
                return myRepository.save(st);

        }).orElseThrow(()-> new StudentNotFoundException("student does not exists"));
    }

    @Override
    public void deleteStudent(Long id) {
       myRepository.deleteById(id);
    }

    private boolean studentAlreadyExist(String email){
        return myRepository.findByEmail(email).isPresent();
    }

}
