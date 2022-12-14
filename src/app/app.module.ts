import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EuropwComponent } from './components/europw/europw.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { MonedaPipe } from './pipes/moneda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EuropwComponent,
    CountryViewComponent,
    MonedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Importamos el modulo principal de la libreria AGM Core y tenemos que pasarle la API Key
    AgmCoreModule.forRoot(environment.googleMaps)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
