import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

import { ClientsService } from './services/clients.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientFormComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
