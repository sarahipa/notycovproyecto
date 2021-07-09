import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  get usuario(){
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  
  
  logout(){
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

}
