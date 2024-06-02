import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BilanServiceService } from '../../services/bilan-service.service';

@Component({
  selector: 'app-ajout-bilan',
  templateUrl: './ajout-bilan.component.html',
  styleUrl: './ajout-bilan.component.css'
})
export class AjoutBilanComponent {

  bilanForm: FormGroup;
  radiographies = ['IRM', 'TDM', 'Imagerie','Échographie','Scanner thoracique','Rayon']; 
  biologiques = ['Hémogramme', 'Biochimie', 'Immunologie','Urée','Créatinine','Transaminases','Bilirubine','Glycémie','Cholestérol','Triglycérides','Calcium','Protéines totales','Albumine']; 

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AjoutBilanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private bilanServ:BilanServiceService
  ) {
    this.bilanForm = this.fb.group({
      date: [{ value: new Date(), disabled: true }, Validators.required],
      docteur: [data.medecinName, ],
      patient: [{ value: `${data?.prenom} ${data?.nom}`, disabled: true }, Validators.required],
      typeBilan: ['', Validators.required],
      radiographie: [''],
      biologiques: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  get biologiquesFormArray(): FormArray {
    return this.bilanForm.get('biologiques') as FormArray;
  }

  onTypeBilanChange(type: string): void {
    if (type === 'radiographie') {
      this.biologiquesFormArray.clear();
      this.bilanForm.get('radiographie')?.setValidators(Validators.required);
    } else if (type === 'biologique') {
      this.bilanForm.get('radiographie')?.clearValidators();
      this.biologiquesFormArray.setValidators(Validators.required);
    }
    this.bilanForm.get('radiographie')?.updateValueAndValidity();
    this.biologiquesFormArray.updateValueAndValidity();
  }

  addBiologique(biologique: string): void {
    if (!this.biologiquesFormArray.value.includes(biologique)) {
      this.biologiquesFormArray.push(this.fb.control(biologique));
    }
  }

  removeBiologique(index: number): void {
    this.biologiquesFormArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.bilanForm.valid) {
      const bilanData = {
        ...this.bilanForm.getRawValue(), 
        patient: this.data.patient 
      };
  
      console.log(bilanData); 
  
      this.bilanServ.addBilan(bilanData).subscribe(
        response => {
          console.log('Bilan ajouté avec succès', response);
          this.dialogRef.close(); 
          this.router.navigate(['/bilans']); 
        },
        error => {
          console.error('Erreur lors de l\'ajout du bilan', error);
          this.dialogRef.close(); 
        }
      );
    }
  }
  
}

