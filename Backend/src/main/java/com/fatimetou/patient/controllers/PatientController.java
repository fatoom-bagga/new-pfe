package com.fatimetou.patient.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import com.fatimetou.patient.entities.Patient;
import com.fatimetou.patient.services.PatientService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/patient")
public class PatientController {

    @Autowired
    PatientService patientServ;

    @GetMapping("/getAll/patient")
    public ResponseEntity<List<Patient>> getAll() {
        List<Patient> patients = patientServ.listerPatient();
        patients.sort(Comparator.comparingLong(Patient::getId));
        return ResponseEntity.status(HttpStatus.OK).body(patients);
    }

    @PostMapping("/create/patient")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        return ResponseEntity.status(HttpStatus.CREATED).body(patientServ.ajouterPatient(patient));
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
        Patient patient = patientServ.getPatientById(id);
        return ResponseEntity.ok(patient);
    }

    @PutMapping("update/patient/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable("id") Long id, @RequestBody Patient patient) {
        return ResponseEntity.status(HttpStatus.OK).body(patientServ.modifierPatient(patient, id));
    }
}
