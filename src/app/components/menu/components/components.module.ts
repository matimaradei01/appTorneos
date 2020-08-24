import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card/card.component';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";


@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxWhastappButtonModule,

  ],
  exports:[
    MenuComponent,
    CardComponent,
    
  ],
})
export class ComponentsModule { }
