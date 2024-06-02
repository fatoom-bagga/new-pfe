package com.fatimetou.patient.exception;

public class OrdNotFoundException extends RuntimeException{
    public OrdNotFoundException(Long id) {
        super("Ordonnance not found with id " + id);
    }
}
