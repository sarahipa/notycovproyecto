import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { AuthpService } from '../services/authp.service';
import { Marcador } from '../interfacess/interfacesp';

import{Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent{

  get usuario(){
    return this.authService.usuario;
  }

  get marcaa(){
    return this.authpService;
  }

  constructor(private router: Router,
             private authService: AuthService,
             private authpService: AuthService ) { }

           logout(){
              this.router.navigateByUrl('/auth');
              this.authService.logout();
            }

}
