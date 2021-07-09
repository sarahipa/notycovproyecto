import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html',
  styleUrls: ['./sintomas.component.css']
})
export class SintomasComponent {

   estadograve = 'estado grave';

  constructor() {}




  numero: number =0;
  numeroNo: number =0;



  sumasi(){
   this.numero +=1;
  }


  sumasimenos(){
    this.numero -=1;
   }


  sumano(){
    this.numeroNo +=1;
   }


   sumanomenos(){
    this.numeroNo -=1;
   }


 contcero(){
   this.numero=0
 }
   




 rango(){
  this.pregun();
  if (this.numero==5) {
     console.log(" grave fhjfhhdhd");
      Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
   };
   if (this.numero==6) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
  };
  if (this.numero==7) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
  };
  if (this.numero==8) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
  };
  if (this.numero==9) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
  };
   if (this.numero==0) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Saludable, sigue medidas sanitarias para prevenir el contagio de el covid 19');
  };
  if (this.numero==1) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Saludable, sigue medidas sanitarias para prevenir el contagio de el covid 19');
  };
  if (this.numero==4) {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Saludable, sigue medidas sanitarias para prevenir el contagio de el covid 19');
  };
   if (this.preguntas.pregunta2=='si') {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
  };
  
  if (this.preguntas.pregunta9=='si') {
    console.log(" grave fhjfhhdhd");
     Swal.fire('Estado de salud', 'Tu estado de salud podria ser grave, acude con un doctor');
  };
   if (this.numero==3) {
    console.log("festas bien hjfhhdhd");
    Swal.fire('Estado de salud', 'Saludable,sigue medidas sanitarias para prevenir el contagio de el covid 19');
  };
 }





 mensaje(){
   
 }
 
 
 pregun(){
  if (this.preguntas.pregunta1=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta2=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta3=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta4=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta5=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta6=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta7=='si') {
    this.numero +=1;
    
  }

  if (this.preguntas.pregunta8=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta9=='si') {
    this.numero +=1;
    
  }
  if (this.preguntas.pregunta10=='si') {
    this.numero +=1;
    
  }
  
}

  preguntas={
    pregunta1: '',
    pregunta2: '',
    pregunta3: '',
    pregunta4: '',
    pregunta5: '',
    pregunta6: '',
    pregunta7: '',
    pregunta8: '',
    pregunta9: '',
    pregunta10: ''

  }

  

}
