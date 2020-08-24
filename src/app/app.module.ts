import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/menu/components/components.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InscripcionPage } from './inscripcion/inscripcion.page';



@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ComponentsModule, 
    IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
    InscripcionPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
