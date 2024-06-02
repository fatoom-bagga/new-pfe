import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CertService } from '../../services/cert.service';

@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrl: './add-cert.component.css'
})
export class AddCertComponent {
  certificatForm: FormGroup;
 

  constructor(
    public dialogRef: MatDialogRef<AddCertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private cerService:CertService
  ) {
    
    this.certificatForm = this.fb.group({
      date: [{ value: new Date(), disabled: true }, Validators.required],
      doctorName: [{ value: `${data?.medecinName} `, disabled: true }, Validators.required],
      patient: [{ value: `${data?.prenom} ${data?.nom}`, disabled: true }, Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.certificatForm.valid) {
      console.log(this.certificatForm.value);
      this.cerService.addCert(this.certificatForm.value).subscribe(
        response => console.log('certificat added successfully', response),
        error => console.error('Error adding certificat', error)
      );
      
    }
}
  
}
