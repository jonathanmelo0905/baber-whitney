import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vender-rentar-inversion',
  templateUrl: './vender-rentar-inversion.component.html',
  styleUrls: ['./vender-rentar-inversion.component.css']
})
export class VenderRentarInversionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('')
  }

  evento1(){
    sessionStorage.setItem('precio', '1')
  }

  evento2(){
    sessionStorage.setItem('precio', '2')
  }

  evento3(){
    sessionStorage.setItem('precio', '3')
  }

}
