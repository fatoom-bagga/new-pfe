import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientServService } from '../../services/patient-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
  searchForm: FormGroup;
  patients: any[] = [];
  filteredPatients: any[] = [];

  constructor(
    private fb: FormBuilder,
    private patientService: PatientServService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
      this.filteredPatients = patients;
    });
  }

  onSearch() {
    const selectedPatient = this.searchForm.get('search')?.value;
    if (selectedPatient) {
      this.router.navigate(['/addFiche', selectedPatient.id]);
    } else {
      alert('Veuillez sélectionner un patient.');
    }
  }
}
