import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientServService } from '../../services/patient-serv.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajou-fiche',
  templateUrl: './ajou-fiche.component.html',
  styleUrl: './ajou-fiche.component.css'
})
export class AjouFicheComponent implements OnInit {
  
    patient: any;
    showMedical: boolean = false;
    showSurgical: boolean = false;
    showFamilial: boolean = false;
    medicalForm: FormGroup;
    surgicalForm: FormGroup;
    familialForm: FormGroup;
  
    constructor(
      private route: ActivatedRoute,
      private patientService: PatientServService,
      private router: Router,
      private fb: FormBuilder
    ) {
      this.medicalForm = this.fb.group({
        description: ['']
      });
      this.surgicalForm = this.fb.group({
        description: ['']
      });
      this.familialForm = this.fb.group({
        description: ['']
      });
    }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const patientId = parseInt(id, 10);
        this.patientService.getPatientById(patientId).subscribe({
          next: (res: any) => {
            this.patient = res;
          },
          error: (err) => console.error(err),
        });
      }
    }
  
    toggleMedical() {
      this.showMedical = !this.showMedical;
    }
  
    toggleSurgical() {
      this.showSurgical = !this.showSurgical;
    }
  
    toggleFamilial() {
      this.showFamilial = !this.showFamilial;
    }
  
    onSave(type: string) {
      let formData;
      if (type === 'medical') {
        formData = this.medicalForm.value;
      } else if (type === 'surgical') {
        formData = this.surgicalForm.value;
      } else if (type === 'familial') {
        formData = this.familialForm.value;
      }
  
      // Save formData to server using patientService
      console.log(`${type} antecedent saved:`, formData);
    }

    get medicalDescription() {
      return this.medicalForm.get('description') as FormControl;
    }
  
    get surgicalDescription() {
      return this.surgicalForm.get('description') as FormControl;
    }
  
    get familialDescription() {
      return this.familialForm.get('description') as FormControl;
    }
  }
  

