import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service'


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientes: any =[];

  constructor(private clientService: ClientsService ) { }

  ngOnInit() {
    this.clientService.getClient().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.log(err)
    )

  }

}
