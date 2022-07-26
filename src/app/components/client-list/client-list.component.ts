import { getLocaleDayNames } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { postClient } from 'src/app/models/client-models';
import {ClientsService} from '../../services/clients.service'


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  newCliente: postClient ={
    NOMBRE: '',
    CORREO: '',
    TELEFONO: 310
  }

  menssage: string = '';
  clientes: any =[];
  user: FormGroup = new FormGroup({});

  constructor(private clientService: ClientsService ) { }

  ngOnInit() {
    this.clientService.getClient().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.log(err)
    )

    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('',[Validators.email])
    })
  }

  public onSubmit(){
    this.menssage ='Guardado con exito';
    const name = this.user.value.name;
    const email = this.user.value.email;
    this.newCliente.NOMBRE = name;
    this.newCliente.CORREO = email;
    console.log(name,email,this.newCliente,'tatis triana');
    this.clientService.saveClient(this.newCliente)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)       
      )
    }

}
