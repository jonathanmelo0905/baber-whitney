import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from './components/client-list/client-list.component'
import { ClientFormComponent } from './components/client-form/client-form.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientListComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
