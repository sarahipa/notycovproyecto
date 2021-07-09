import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LocalizarComponent } from './localizar/localizar.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [

  
  {
    path: '',component: DashboardComponent ,
    children: [
      {
        path: '', component: HomeComponent,
        pathMatch: 'full'
      },

      {
        path: 'localizar', component: LocalizarComponent,
        pathMatch: 'full'
      },
      {
        path: 'sintomas', component: SintomasComponent,
        pathMatch: 'full'
      },
      {
        path: 'perfil', component: PerfilComponent,
        pathMatch: 'full'
      },


      {path: '**', redirectTo: ''},
    ]
  }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
