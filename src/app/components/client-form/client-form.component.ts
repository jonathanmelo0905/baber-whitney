import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    
  }

  eventoclick(){
    
    console.log('hola tatis');  
  }

}
