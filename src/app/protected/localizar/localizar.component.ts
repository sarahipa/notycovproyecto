import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl' ;
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthpService } from '../services/authp.service';
import { Router } from '@angular/router';

interface MarcadorColor {

//  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number]
}

interface MarcadorColor2 {

  //  color: string;
    marker?: mapboxgl.Marker;
    centro?: [number, number]
  }


@Component({
  selector: 'app-localizar',
  templateUrl: './localizar.component.html',
  styles: [
    `
    .mapa-container{
      height: 100%;
      width: 100%;
    }
    .row{
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }

    .list-group{
      
      position: fixed;
      top: 90px;
      right: 20px;    
      z-index: 99;
      
    }
    li{
      cursor: pointer;
    }

    `
  ]
  
})



export class LocalizarComponent implements AfterViewInit, OnDestroy {

  listMarcador: AuthpService[]=[];

 

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel: number =12;
  center: [number, number] = [ -98.97193399037762, 22.738507637588498, ];

  //Arreglo marcadore 
  //marcadores: MarcadorColor[]=[];
  marcadores: MarcadorColor[]=[];
  marcadores2: MarcadorColor2[]=[];

  

 ///////////////obtener marcador/////////////////////

 miMarcador: FormGroup = this.f.group({
 marcador: ['', [Validators.required]]
});



  constructor( private f: FormBuilder,
               //private router: Router,
                private authpService: AuthpService
                
                ) {}

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {})
  }

 

  ngAfterViewInit(): void {
     
    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.zoomLevel
    });

   // this.obtenerMarcadores();
    
    this.leerLocalstorage();
    //this.obtenerMarcadores();
    //.leerdelaBD()

    this.mapa.on('zoom', (ev)=> {
     this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev)=> {
      if( this.mapa.getZoom() > 18 ) {
        this.mapa.zoomTo ( 18 );
      }
      
     });

     //movimiento del mapa 
     this.mapa.on('move', (event) =>{
       const target = event.target;
       const { lng, lat } = target.getCenter();
       this.center = [lng, lat];
        
     });

     //const markerHtml: HTMLElement = document.createElement('div');
     //markerHtml. innerHTML = 'Hola mundo'

     //new mapboxgl.Marker({
     //})
     //.setLngLat( this.center)
     //.addTo( this.mapa );

     

  }

  agregarMarcador() {
    
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    const nuevomarcador = new mapboxgl.Marker({
      draggable: true,
    })
    
    .setLngLat( this.center)
    .addTo(this.mapa);
    console.log(this.center)

    if (this.marcadores2.length ==1 ) {

      console.log('vvvvvvvvvvv')
                                                                            //this.marcadores[i].marker?.remove();
    } else {
      this.marcadores2.push({
        //  color,
         marker: nuevomarcador 
       });
      
  //     this.guardarMarcadorLocalStorage() 
    }
                                                                    // this.guardarMarcadorLocalStorage()
    nuevomarcador.on('dragend', ()=> {
     // this.guardarMarcadorLocalStorage();
    }); 
  };


 marcadocont(){
      if (this.marcadores.length==0) {
         this.agregarMarcador() 
      }
    }
  
 
 guardarMarcadorLocalStorage() {

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m => {
           
      //const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
      //  color: color,
        centro: [lng, lat]

      }); 
    });

    localStorage.setItem('marcadores', JSON.stringify (lngLatArr));

   console.log(JSON.stringify (lngLatArr));

  }




///..............................es un caliz ..........................

guardarMarcadorBD() {

  const lngLatArr: MarcadorColor2[] = [];

  console.log('hola')
  console.log(lngLatArr)
 


  this.marcadores2.forEach( m => {
         
    //const color = m.color;
    const {lng, lat} = m.marker!.getLngLat();

    lngLatArr.push({
    //  color: color,
      centro: [lng, lat]

    }); 
  });


  const marcador = JSON.stringify (lngLatArr)

  this.authpService.agregarMarcador1( marcador ).subscribe (ok => {
    if(ok === true){


      console.log('okkkk');
      console.log(lngLatArr)
     console.log('okkkk');
   }


 });

 

}


obtenerMarcadores(){
  // const marcador = ''
  


   this.authpService.getMarcadoree().subscribe (data =>{
 
     //console.log(data);
     this.listMarcador=data;

        // const lngLatArr: MarcadorColor[] = [data];

    
            console.log(data );


           


           var newMarca11: any[] = []
           var newMarca12: any[] = []
            
            data.forEach((m1: any[]) => {
              m1.forEach((m2: any) => {
                newMarca12.push(m2);
              });
          });
          localStorage.removeItem('marcadores')
     localStorage.setItem('marcadores', JSON.stringify (newMarca12));

     console.log(newMarca12)
   
   }, error=>{
     console.log(error);
   });


   
 





  }




/////////////////////////////// TE QUESATE AQUI ES UN METODO COPIADO 
leerdelaBD(){

  if ( !localStorage.getItem('marcadores')){
    return;
  }

  

  const lngLatArr: MarcadorColor[]= JSON.parse(localStorage.getItem('marcadores')!);

  lngLatArr.forEach( m => {

    const newMarker = new mapboxgl.Marker({
   //   color: m.color,
      draggable: true
    })

      .setLngLat(m.centro!)
      .addTo(this.mapa);

      this.marcadores.push ({
        marker: newMarker,
    //    color: m.color
      });

    newMarker.on('dragend', ()=> {
      this.guardarMarcadorLocalStorage();
    });  


  });


}

///............................................ ..........................


 AMarcadorbd(){

    const {marcador} = this.miMarcador.value;

    this.authpService.agregarMarcador1(marcador).subscribe (ok => {
      if(ok === true){
       
       console.log('ok');
     }
   });
 }



 mostrar(i: number){
  const lngLatArr: MarcadorColor[] = [];

  this.marcadores.forEach( m => {
         
    //const color = m.color;
    const {lng, lat} = m.marker!.getLngLat();
  });

   console.log(lngLatArr)
 }





  leerLocalstorage(){

    

    if ( !localStorage.getItem('marcadores')){
      return;
    }

    const lngLatArr: MarcadorColor[]= JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach( m => {

      const newMarker = new mapboxgl.Marker({
     //   color: m.color,
        draggable: true
      })

        .setLngLat(m.centro!)
        .addTo(this.mapa);

        this.marcadores.push ({
          marker: newMarker,
      //    color: m.color
        });

      newMarker.on('dragend', ()=> {
        this.guardarMarcadorLocalStorage();
      });  


    });
  }
 
 

  borrarmarcador( i: number ){
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i, 1);
    this,this.guardarMarcadorLocalStorage();

  }

  
  irMarcador(){

     }


  zoomOut(){
    this.mapa.zoomOut();

  }

  zoomIn(){
    this.mapa.zoomIn();
    
  }

  zoomCambio( valor: string ){
    this.mapa.zoomTo(Number(valor))
  }

  
 

}
