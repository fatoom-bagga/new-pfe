import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { ListPatientsComponent } from './patients/list-patients/list-patients.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddOrdComponent } from './ordonnances/add-ord/add-ord.component';
import { ListOrdComponent } from './ordonnances/list-ord/list-ord.component';
import { AjoutBilanComponent } from './bilans/ajout-bilan/ajout-bilan.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { DetailsOrdComponent } from './ordonnances/details-ord/details-ord.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddCertComponent } from './certificats/add-cert/add-cert.component';
import { ListBilansComponent } from './bilans/list-bilans/list-bilans.component';
import { LoginComponent } from './components/login/login.component';
import { ListMedecinsComponent } from './components/list-medecins/list-medecins.component';
import { AddMedecinComponent } from './components/add-medecin/add-medecin.component';
import { AuthInterceptor } from '../app/interceptors/auth.service';
import { AddRdvComponent } from './rendez-vous/add-rdv/add-rdv.component';
import { AddConsultComponent } from './consultations/add-consult/add-consult.component';
import { RechercheComponent } from './fiches/recherche/recherche.component';
import { AjouFicheComponent } from './fiches/ajou-fiche/ajou-fiche.component';  // Assurez-vous que le chemin est correct

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ListPatientsComponent,
    AddPatientsComponent,
    AddOrdComponent,
    ListOrdComponent,
    AjoutBilanComponent,
    PatientDetailsComponent,
    DetailsOrdComponent,
    AddCertComponent,
    ListBilansComponent,
    LoginComponent,
    ListMedecinsComponent,
    AddMedecinComponent,
    AddRdvComponent,
    AddConsultComponent,
    RechercheComponent,
    AjouFicheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    RouterLink,
    MatCommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
