import { Component } from '@angular/core';
import { Bilan } from '../bilan.model';
import { BilanServiceService } from '../../services/bilan-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bilans',
  templateUrl: './list-bilans.component.html',
  styleUrl: './list-bilans.component.css'
})
export class ListBilansComponent {
  bilans: Bilan[] = [];
  displayedColumns: string[] = ['typeBilan', 'date', 'actions'];
  constructor(private bilanService: BilanServiceService, private router: Router) { }

  ngOnInit(): void {
    this.bilanService.getBilans().subscribe(data => {
      this.bilans = data;
    });
  }

  onEdit(bilan: Bilan): void {
    // Logique pour modifier un bilan
    this.router.navigate(['/edit-bilan', bilan.id]);
  }

  onViewDetails(bilan: Bilan): void {
    // Logique pour voir les détails d'un bilan
    this.router.navigate(['/details-bilan', bilan.id]);
  }
}
