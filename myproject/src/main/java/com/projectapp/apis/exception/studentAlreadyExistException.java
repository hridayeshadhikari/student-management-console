package com.projectapp.apis.exception;

public class studentAlreadyExistException extends RuntimeException {
    public studentAlreadyExistException(String message) {
        super(message);
    }
}
