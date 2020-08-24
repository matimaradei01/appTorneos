import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'inscripcion/:id',
    loadChildren: () => import('./inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  },
  {
    path: 'rankin-ganadores',
    loadChildren: () => import('./rankinGanadores/rankin-ganadores/rankin-ganadores.module').then( m => m.RankinGanadoresPageModule)
  },
  {
    path: 'torneo',
    loadChildren: () => import('./torneo/torneo/torneo.module').then( m => m.TorneoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
