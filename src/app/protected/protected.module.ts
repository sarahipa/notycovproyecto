import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { LocalizarComponent } from './localizar/localizar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SintomasComponent,
    LocalizarComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProtectedModule { }
