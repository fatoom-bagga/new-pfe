import { Component, OnInit } from '@angular/core';
import { PatientServService } from '../../services/patient-serv.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddOrdComponent } from '../../ordonnances/add-ord/add-ord.component';
import { AjoutBilanComponent } from '../../bilans/ajout-bilan/ajout-bilan.component';
import { AddCertComponent } from '../../certificats/add-cert/add-cert.component';
import { MedecinService } from '../../services/medecin.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent implements OnInit {
  patient: any;
  medecin:any;
  medecinId!: String | null;
  medecinPrenom!: string;
  medecinName!:any;

  constructor(private _PatientS: PatientServService,private route: ActivatedRoute,private _dialog:MatDialog,private router:Router,private medecinServ:MedecinService,private authService:AuthService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const patientId = parseInt(id, 10); 
      this._PatientS.getPatientById(patientId).subscribe({
        next: (res: any) => {
          console.log(res);
          this.patient = res;
        },
        error: (err) => console.error(err),
      });
    } else {
      console.error('No patient ID provided');
    }
 

    this.medecinName = localStorage.getItem('userName');
  }
    
  
  openAddOrdonnanceDialog(): void {
    const dialogRef = this._dialog.open(AddOrdComponent, {
      data: {
        nom: this.patient.nom,
        prenom: this.patient.prenom,
       medecinName: this.medecinName 
       
      }
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.medecinPrenom)

      if (result) {
        this.router.navigate(['/list-ordonnances']);
      }
    });
  }

  openAddBilanDialog(): void{
    const dialogRef = this._dialog.open(AjoutBilanComponent, {
      data: {
        nom: this.patient.nom,
        prenom: this.patient.prenom,
       medecinName: this.medecinName 
       
      }
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Traitez ici les résultats de la boîte de dialogue si nécessaire
    });
  }

  openCertificatDialog(): void {
    const dialogRef = this._dialog.open(AddCertComponent, {
      data: {
        nom: this.patient.nom,
        prenom: this.patient.prenom,
       medecinName: this.medecinName 
       
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Certificat Médical:', result);
        // Traitez le résultat ici, par exemple, en enregistrant le certificat
      }
    });
  }


  openAddConsultationDialog() {
    this.router.navigate(['/consultation'], {
      queryParams: {
        nom: this.patient.nom,
        prenom: this.patient.prenom,
        medecinName: this.medecinName
      }
    });
  }
  
  openAddRendezVousDialog(){
    this.router.navigate(['/rendez-vous']);
  }
    }

