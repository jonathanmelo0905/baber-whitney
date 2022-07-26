import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion-lote',
  templateUrl: './ubicacion-lote.component.html',
  styleUrls: ['./ubicacion-lote.component.css']
})
export class UbicacionLoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  evento1(){
    sessionStorage.setItem('ubicacion', 'norte')
  }

  evento2(){
    sessionStorage.setItem('ubicacion', 'sur')
  }

}
