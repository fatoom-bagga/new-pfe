import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { PatientServService } from '../../services/patient-serv.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddPatientsComponent } from '../add-patients/add-patients.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../patient.model';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrl: './list-patients.component.css'
})
export class ListPatientsComponent implements OnInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _PatientS:PatientServService,private _dialog:MatDialog , private authService: AuthService){}
  public patients: Patient[] = [];
  displayedColumns:string[]=["id","Prenom","Nom","dateNaissance","Adresse","Action"];
  dataSource = new MatTableDataSource<any>;

  opendialog(){
   const dailogRef= this._dialog.open(AddPatientsComponent);
   dailogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this._PatientS.getPatients();
      }
    }
   })
  }

  openeditform(data:any){
    const dialogRef =this._dialog.open(AddPatientsComponent,{data,});
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this._PatientS.getPatients();
        }
      }
     })

  }
 
  ngOnInit(): void {
   const userRole = this.authService.isAuthenticated();
    console.log('Logged in user role: ', userRole);
    
    this._PatientS.getPatients().subscribe({
      next: (res: any) => {
        console.log(res); // Ajoutez cette ligne pour afficher les données récupérées dans la console
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
        console.log( this.dataSource);
      },
      error: console.error,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
