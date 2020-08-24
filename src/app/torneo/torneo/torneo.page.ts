import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/services/services.service';
import { InscripcionPage } from 'src/app/inscripcion/inscripcion.page';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.page.html',
  styleUrls: ['./torneo.page.scss'],
})
export class TorneoPage implements OnInit {
  equiposAnotados = [];
  coleccion:string = 'asd';

  
  constructor(private servicio:ServicesService, private inscripcion:InscripcionPage) {
    debugger;
    this.equiposAnotados = this.inscripcion.getArrayUsuarios();
     //this.equiposAnotados = this.mezclarArray(this.equiposAnotados);
  }

  ngOnInit() {  }

  

   mezclarArray(arr) {
    var i,
        j,
        temp;
    for (i = this.equiposAnotados.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

}
