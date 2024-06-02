import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientServService } from '../../services/patient-serv.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrl: './add-patients.component.css',})
export class AddPatientsComponent implements OnInit {
 empForm:FormGroup;
  constructor(private _ref:MatDialogRef<AddPatientsComponent>,
    private _fb:FormBuilder,private _PatientS:PatientServService
     ,private router:Router,@Inject(MAT_DIALOG_DATA) public data:any){
this.empForm=this._fb.group({
  prenom:'',
  nom:'',
  dateNaissance:'',
  adresse:'',
  sexe:'',
  nationnalite:'',
  etatCivil:'',
  lieuNaiss:''
})
  }

  

  etatCivil:string[]=[
    'marié(e)',
    'célibataire',
    'divorcé(e)'
    
  ]
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._PatientS.updatePatient(this.data.id,this.empForm.value).subscribe({
          next:(val:any)=>{
           this._ref.close(true);
           
          },
          error:(err:any)=>{
            console.error(err)
          }
        })
      }
      else{
        this._PatientS.createPatient(this.empForm.value).subscribe({
          next:(val:any)=>{
            console.log("------");
            console.log(this.empForm.value)
           this._ref.close(true);
           this.router.navigate(['/patients']);
           
          },
          error:(err:any)=>{
            console.error(err)
          }
        })
      }
     
    }
  }

  ngOnInit(): void {
      this.empForm.patchValue(this.data);
  }
}
