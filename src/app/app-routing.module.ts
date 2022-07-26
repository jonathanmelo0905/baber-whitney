import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from './components/client-list/client-list.component'
import { ClientFormComponent } from './components/client-form/client-form.component'
import { ConstruirVivirComponent } from './components/construir-vivir/construir-vivir.component';
import { AreaLoteComponent } from './components/area-lote/area-lote.component';
import { VenderRentarInversionComponent } from './components/vender-rentar-inversion/vender-rentar-inversion.component';
import { UbicacionLoteComponent } from './components/ubicacion-lote/ubicacion-lote.component';
import { InformacionLotesComponent } from './components/informacion-lotes/informacion-lotes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/habitat',
    pathMatch: 'full'
  },
  {
    path: 'habitat',
    component: ClientListComponent,
  },
  {
    path: 'habitat/busca-tu-lote',
    component: ClientFormComponent
  },
  {
    path: 'habitat/busca-tu-lote/construir-vivir',
    component: ConstruirVivirComponent
  },
  {
    path: 'habitat/busca-tu-lote/area-lote',
    component: AreaLoteComponent
  },
  {
    path: 'habitat/busca-tu-lote/vender-rentar-inversion',
    component: VenderRentarInversionComponent
  },
  {
    path: 'habitat/busca-tu-lote/ubicacio-lote',
    component: UbicacionLoteComponent
  },
  {
    path: 'habitat/busca-tu-lote/informacion-lotes',
    component: InformacionLotesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
