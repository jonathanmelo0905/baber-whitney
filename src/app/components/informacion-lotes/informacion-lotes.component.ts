import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {ClientsService} from '../../services/clients.service'


@Component({
  selector: 'app-informacion-lotes',
  templateUrl: './informacion-lotes.component.html',
  styleUrls: ['./informacion-lotes.component.css']
})
export class InformacionLotesComponent implements OnInit {
  nameLote: string = '';
  area: string = '';
  precio: string = '';

  lotes: any =[];

  constructor(
    private clientService: ClientsService,
    private _sanitizer: DomSanitizer
  ){}

  async ngOnInit(){
    this.getSessionStorage();
  }

  getVideoIframe(url:string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);    
  }

  getSessionStorage(){
    const area1 = sessionStorage.getItem("area") || '';
    const precio = sessionStorage.getItem("precio") || '';
    const ubicacion = sessionStorage.getItem("ubicacion") || '';
    this.clientService.getOneClient( area1 ,ubicacion, precio).subscribe(
      res => {
        this.lotes = res;
        console.log(this.lotes);
        this.nameLote = this.lotes[0].lote;
        this.area = 'Área privativa:  ' + this.lotes[0].area + 'm2';
        this.precio = '$'+this.lotes[0].precio + ',000,000 PC';
      },
      err => console.log(err, 'jonathan melooooooooooooooo')
    );
  }
}
