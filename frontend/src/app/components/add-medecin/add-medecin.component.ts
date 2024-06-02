import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedecinService } from '../../services/medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent {
  medecinForm: FormGroup;

  constructor(private fb: FormBuilder, private medecinService: MedecinService, private router: Router) {
    this.medecinForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      prenom: ['', Validators.required],
      genre: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.medecinForm.valid) {
      this.medecinService.createMedecin(this.medecinForm.value).subscribe(
        response => {
          console.log('Medecin created successfully', response);
          this.router.navigate(['/medecins']);
        },
        error => {
          console.error('Error creating medecin', error);
        }
      );
    }
  }
}
