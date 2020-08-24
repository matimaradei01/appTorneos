import { Component , OnInit} from '@angular/core';
import { ServicesService } from 'src/services/services.service';
import { cardTorneos } from 'src/app/interfaces/interface';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{

  torneos : cardTorneos [];
  public phone = "+5491150176456";
  public title = "Hola! Me gustaria participar del torneo! :)";

  constructor(private services : ServicesService , 
              public ctr: AlertController,
              private route: Router,
    ) { }

  ngOnInit(): void {
    this.agregarTorneos();
  }

  agregarTorneos(){
    this.torneos =  this.services.getTorneos();
  }

   async presentAlertPrompt() {
    const alert = await this.ctr.create({
      cssClass: 'my-custom-class',
      header: 'Entrar a la Sala',
      inputs: [
        {
          name: 'user',
          type: 'text',
          placeholder: 'Codigo del Usuario'
        },        
        {
          name: 'admin',
          type: 'text',
          placeholder: 'Codigo del Administrador'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.verificarUsuarios(data.user);
            this.verificarAdmin(data.admin);

          }
        }
      ]
    });
    await alert.present();

}

  verificarUsuarios(data) {
    console.log(data);
  }

  verificarAdmin(data) {
    if(data == '123' ? true:false) {
      this.route.navigate(['/inscripcion', 1]);
 }else{
   alert("El codigo admin ingresado es incorrecto");
 }

}

}
