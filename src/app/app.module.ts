import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

import { ClientsService } from './services/clients.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConstruirVivirComponent } from './components/construir-vivir/construir-vivir.component';
import { AreaLoteComponent } from './components/area-lote/area-lote.component';
import { VenderRentarInversionComponent } from './components/vender-rentar-inversion/vender-rentar-inversion.component';
import { UbicacionLoteComponent } from './components/ubicacion-lote/ubicacion-lote.component';
import { InformacionLotesComponent } from './components/informacion-lotes/informacion-lotes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientFormComponent,
    ClientListComponent,
    ConstruirVivirComponent,
    AreaLoteComponent,
    VenderRentarInversionComponent,
    UbicacionLoteComponent,
    InformacionLotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
