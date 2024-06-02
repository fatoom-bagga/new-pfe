import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ListPatientsComponent } from './patients/list-patients/list-patients.component';
import { AddOrdComponent } from './ordonnances/add-ord/add-ord.component';
import { ListOrdComponent } from './ordonnances/list-ord/list-ord.component';
import { AjoutBilanComponent } from './bilans/ajout-bilan/ajout-bilan.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { ListBilansComponent } from './bilans/list-bilans/list-bilans.component';
import { LoginComponent } from './components/login/login.component';
import { ListMedecinsComponent } from './components/list-medecins/list-medecins.component';
import { AddMedecinComponent } from './components/add-medecin/add-medecin.component';
import { AuthGuard } from '../app/guards/auth.guard';  // Importer AuthGuard
import { AddRdvComponent } from './rendez-vous/add-rdv/add-rdv.component';
import { AddConsultComponent } from './consultations/add-consult/add-consult.component';
import { RechercheComponent } from './fiches/recherche/recherche.component';
import { AjouFicheComponent } from './fiches/ajou-fiche/ajou-fiche.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: DashbordComponent,
    canActivate: [AuthGuard],  // Protéger le routeur parent
    children: [
      { path: 'patients', component: ListPatientsComponent, canActivate: [AuthGuard] },
      { path: 'medecins', component: ListMedecinsComponent, canActivate: [AuthGuard] },
      { path: 'add_Medcine', component: AddMedecinComponent, canActivate: [AuthGuard] },
      { path: 'ordonnances', component: ListOrdComponent, canActivate: [AuthGuard] },
      { path: 'bilan', component: AjoutBilanComponent, canActivate: [AuthGuard] },
      { path: 'details/:id', component: PatientDetailsComponent, canActivate: [AuthGuard] },
      { path: 'bilans', component: ListBilansComponent, canActivate: [AuthGuard] },
      {path:'rendez-vous',component:AddRdvComponent,canActivate: [AuthGuard]},
      {path:'consultation',component:AddConsultComponent,canActivate: [AuthGuard]},
      {path:'fiche',component:RechercheComponent,canActivate: [AuthGuard]},
      {path:'addFiche/:id',component:AjouFicheComponent,canActivate: [AuthGuard]}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
