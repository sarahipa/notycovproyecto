import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import {catchError, map, tap} from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { AuthResponsee, Marcador  }from '../interfacess/interfacesp';


@Injectable({
  providedIn: 'root'
})
export class AuthpService {

  private baseUrl: string = environment.baseUrl;
 private marc!: Marcador;


 

 get marcaa(){
  return { ...this.marc};
}
 

  constructor(private http: HttpClient) { }


  agregarMarcador1(marcador: string) {
    const url = `${ this.baseUrl}/auth/niw`;
    const body= {marcador};

    return this.http.post<AuthResponsee>( url, body )
    .pipe( 
     
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    );

  };


////////////////////////////////////////////////////////


  getMarcadore() {
    const marcador = ''
    const urla = `${ this.baseUrl}/auth/niw`;
    const body= {marcador};

   return this.http.post(urla, body)

  }

  getMarcadoree(): Observable<any> {
    const urla = `${ this.baseUrl}/auth/obter`;
    //const body= {marcador};

   return this.http.get(urla)



}


}