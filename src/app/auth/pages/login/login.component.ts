import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({

    //test1@test.com
    //123456

    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  login(){

   console.log(this.miFormulario.value);

   const {email, password } = this.miFormulario.value;

   this.authService.login( email, password )
    .subscribe(ok =>{

      console.log(ok);

      if ( ok===true ){
        this.router.navigateByUrl('/home');
      }else{

        Swal.fire('Error', ok, 'error');

      }
   });




   // this.router.navigateByUrl('/dashboard');

  }

  ngOnInit(): void {
  }

}
