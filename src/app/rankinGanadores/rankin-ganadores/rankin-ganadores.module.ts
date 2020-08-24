import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankinGanadoresPageRoutingModule } from './rankin-ganadores-routing.module';

import { RankinGanadoresPage } from './rankin-ganadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankinGanadoresPageRoutingModule
  ],
  declarations: [RankinGanadoresPage]
})
export class RankinGanadoresPageModule {}
