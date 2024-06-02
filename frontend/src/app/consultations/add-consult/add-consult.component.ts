import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-consult',
  templateUrl: './add-consult.component.html',
  styleUrls: ['./add-consult.component.css']
})
export class AddConsultComponent implements OnInit {
  consultationForm: FormGroup;
  medecinName!: string;
  patientNom!: string;
  patientPrenom!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.consultationForm = this.fb.group({
      poids: [null, [Validators.required, Validators.min(0)]],
      taille: [null, [Validators.required, Validators.min(0)]],
      temperature: [null, [Validators.required, Validators.min(0)]],
      frequenceC: [null, [Validators.required, Validators.min(0)]],
      pressArt: [null, [Validators.required, Validators.min(0)]],
      diagnostique: ['', Validators.required],
      motif: ['', Validators.required],
      date: [{ value: new Date(), disabled: true }, Validators.required],
      doctorName: [{ value: '', disabled: true }, Validators.required],
      patient: [{ value: '', disabled: true }, Validators.required],
    });

    // Initialiser les valeurs si des données sont injectées (cas du dialogue)
    if (this.data) {
      this.medecinName = data.medecinName;
      this.patientNom = data.nom;
      this.patientPrenom = data.prenom;

      this.consultationForm.patchValue({
        doctorName: this.medecinName,
        patient: `${this.patientPrenom} ${this.patientNom}`
      });
    }
  }

  ngOnInit(): void {
    // Si aucune donnée n'est injectée (cas de la page normale), récupérer les queryParams
    if (!this.data) {
      this.route.queryParams.subscribe(params => {
        this.medecinName = params['medecinName'];
        this.patientNom = params['nom'];
        this.patientPrenom = params['prenom'];

        this.consultationForm.patchValue({
          doctorName: this.medecinName,
          patient: `${this.patientPrenom} ${this.patientNom}`
        });
      });
    }
  }

  onSubmit() {
    if (this.consultationForm.valid) {
      const consultationData = this.consultationForm.value;
      console.log('Consultation Data:', consultationData);
      // Vous pouvez ici envoyer les données au serveur via un service
    }
  }
}
