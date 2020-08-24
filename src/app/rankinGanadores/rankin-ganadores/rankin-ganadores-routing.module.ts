import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankinGanadoresPage } from './rankin-ganadores.page';

const routes: Routes = [
  {
    path: '',
    component: RankinGanadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankinGanadoresPageRoutingModule {}
