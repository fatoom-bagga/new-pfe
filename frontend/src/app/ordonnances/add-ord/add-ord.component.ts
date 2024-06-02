import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { OrdonnancesService } from '../../services/ordonnances.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrdonnanceDto } from '../oronnance.dto';
import { Ordonnance } from '../ordonnane.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-ord',
  templateUrl: './add-ord.component.html',
  styleUrl: './add-ord.component.css'
})
export class AddOrdComponent implements OnInit {
  empForm: FormGroup;
  medecinName: any;
  patientName!: String;
  ordonance! : Ordonnance;

  constructor(
    private fb: FormBuilder,
    private ordonnancesService: OrdonnancesService,
    private authService :AuthService,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
    this.empForm = this.fb.group({
      date: [{ value: new Date(), disabled: true }, Validators.required],
      docteur: [{ value: `${data?.medecinName} `, disabled: true }, Validators.required],
      patient: [{ value: `${data?.prenom} ${data?.nom}`, disabled: true }, Validators.required],
      medicaments: this.fb.array([]),
    });
  }
  

  ngOnInit(): void {
    console.log(localStorage.getItem('userName'))
    this.addMedicament(); 
    
  }

  get medicamentsFormArray(): FormArray {
    return this.empForm.get('medicaments') as FormArray;
  }

  initMedicamentForm(): FormGroup {
    return this.fb.group({
      nom: ['', Validators.required],
      quantite: ['', Validators.required],
      posologie: ['', Validators.required]
    });
  }

  loadPatientInfo() {
    if (this.data.patientId) {
      this.ordonnancesService.getPatientById(this.data.patientId).subscribe(
        patient => {
          this.patientName = `${patient.prenom} ${patient.nom}`;
          this.empForm.get('patient')?.setValue(this.patientName);
        },
        error => console.error('Error fetching patient info', error)
      );
    } else {
      console.error('No patientId provided');
    }
  }

  addMedicament(): void {
    this.medicamentsFormArray.push(this.initMedicamentForm());
    this.cdRef.detectChanges();  
  }

  removeMedicament(index: number): void {
    if (index > -1 && index < this.medicamentsFormArray.length) {
      this.medicamentsFormArray.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this.ordonnancesService.addOrdonnance(this.empForm.value).subscribe(
        response => console.log('Ordonnance added successfully', response),
        error => console.error('Error adding ordonnance', error)
      );
      
    }
}
}