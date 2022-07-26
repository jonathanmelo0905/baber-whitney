import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-lote',
  templateUrl: './area-lote.component.html',
  styleUrls: ['./area-lote.component.css']
})
export class AreaLoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public evento1(){
    sessionStorage.setItem("area","1");
  }
  
  evento2(){
    sessionStorage.setItem("area","2");
  }

  evento3(){
    sessionStorage.setItem("area","3");
  }
}
