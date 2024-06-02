import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Assurez-vous du chemin correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  searchQuery: any;


  constructor(private authService: AuthService , private router: Router) {}

  search() {
    // Votre logique de recherche ici
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
