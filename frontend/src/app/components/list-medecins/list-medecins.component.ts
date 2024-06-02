import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../../services/medecin.service';
import { Medecin } from '../../models/medecin';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {
  medecins: Medecin[] = [];
  displayedColumns: string[] = ['id', 'prenom', 'nationnalite', 'adresse', 'genre', 'type'];

  constructor(private medecinService: MedecinService) {}

  ngOnInit() {
    this.medecinService.getAllMedecins().subscribe(data => {
      this.medecins = data;
      console.log(this.medecins);
    });
  }
}
