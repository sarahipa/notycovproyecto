import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

import{Router} from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'

})
export class PerfilComponent {

  get usuario(){
    return this.authService.usuario;
  }

  constructor(private router: Router,
             private authService: AuthService ) { }

             logout(){
              this.router.navigateByUrl('/auth');
              this.authService.logout();
            }
 

}
