import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  //ya hay un componente con 'app-menu' -- a revisar
  selector: 'app-menu1',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.toggle();
  }

}
