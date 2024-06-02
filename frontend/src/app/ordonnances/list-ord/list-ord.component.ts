import { Component, ViewChild } from '@angular/core';
import { AddOrdComponent } from '../add-ord/add-ord.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OrdonnancesService } from '../../services/ordonnances.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-ord',
  templateUrl: './list-ord.component.html',
  styleUrl: './list-ord.component.css'
})
export class ListOrdComponent {
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _Ord:OrdonnancesService,private _dialog:MatDialog){}
  displayedColumns:string[]=["id","NomD","NomP","PenomP","date","Action"];
  dataSource = new MatTableDataSource<any>;

  opendialog(){
   const dailogRef= this._dialog.open(AddOrdComponent);
   dailogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this._Ord.getOrd();
      }
    }
   })
  }

  openeditform(data:any){
    const dialogRef =this._dialog.open(AddOrdComponent,{data,});
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this._Ord.getOrd();
        }
      }
     })

  }
 
  ngOnInit(): void {
  
    this._Ord.getOrd().subscribe({
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
