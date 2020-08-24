import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {


  coleccion:string = 'asd';
  idPs4:string;
  equipoElegido:string;
  habilitado = false;
  equiposAnotados = [];
  jugador:Jugador;
  constructor(private servicio : ServicesService) { 
    this.obtenerEquiposAnotados(this.coleccion);

   }

  ngOnInit() {  }


  obtenerEquiposAnotados(coleccion){

    this.servicio.getUsuarios(coleccion).subscribe(equipos =>{
      this.equiposAnotados = [];
      equipos.forEach(element => {
        this.equiposAnotados.push(element.payload.doc.data());
      }); 
      this.setArrayUsuarios(this.equiposAnotados);
    })
  }
  
  //VALIDAR QUE NO SE REPITA LOS EQUIPO
  registrarUsuario(){

    var encontrado = false;
    if(this.idPs4.length > 1 && this.equipoElegido != null){
      this.jugador = new Jugador(this.idPs4,this.equipoElegido);

      if(this.equiposAnotados.length == 0){
        this.servicio.insertUser(this.jugador,this.coleccion);
      }else{
          for (let i = 0; i < this.equiposAnotados.length; i++) {
            if(this.equiposAnotados[i].idPs4 == this.jugador.idPs4){
              encontrado = true;
              break;
            }
          }
          if(encontrado == false){
            this.servicio.insertUser(this.jugador,this.coleccion);
          } 
        }    
    }  
    console.log(this.equiposAnotados);
  } 

  setCollecion(coleccion){
    this.coleccion = coleccion;
  }

  getArrayUsuarios(){
    return this.equiposAnotados;
  }

  setArrayUsuarios(arrayUsuarios){
    this.equiposAnotados = arrayUsuarios;
  }


}

export class Jugador{
  
  id:String;
  idPs4:String;
  equipo:String;

  constructor(id,equipo){
    this.idPs4 = id;
    this.equipo = equipo;
  }
}