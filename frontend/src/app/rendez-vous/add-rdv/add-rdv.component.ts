import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RdvService } from '../../services/rdv.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrl: './add-rdv.component.css'
})
export class AddRdvComponent {
  RdvForm: FormGroup;
  medecins: any[] = [];
  isMedecin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private rdvService:RdvService ,
  
  ) {
    this.RdvForm = this.fb.group({
      patientName: [''],
      medecinName: [''],
      date: [''],
      motif: ['']
    });
  }

  ngOnInit() {
    
   
  }

  onSubmit() {
    // if (this.RdvForm.valid) {
    //   this.rdvService.createAppointment(this.RdvForm.value).subscribe(response => {
    //     console.log('Appointment added successfully!', response);
    //     // Rediriger vers la liste des rendez-vous
    //   });
    // }
  }
}
