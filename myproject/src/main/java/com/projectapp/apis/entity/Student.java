package com.projectapp.apis.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.NaturalId;


@Entity
@Table(name="STUDENT_INFO")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    @NaturalId(mutable = true)
    private String email;
    private String lastname;
    private String department;


    public Student() {
    }

    public Student(Long id, String firstname, String email, String lastname, String department) {
        this.id = id;
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.department = department;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
