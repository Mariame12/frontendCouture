import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { MesureService } from 'src/app/Mesure/mesure.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] | undefined;
  clientMeasureMap: { [key: number]: boolean } = {};

  constructor(private clientService: ClientService, private mesureService: MesureService, private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }
  private getClients() {
    this.clientService.getClientsList().subscribe(data => this.clients = data)
  }
  clientDetails(id: number) {
    this.router.navigate(['detailClient', id]);
  }


  updateClient(id: number) {
    this.router.navigate(['updateClient', id]);
  }
  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(data => {
      console.log(data);
      this.getClients();
    });
  }

  redirectToCreateMesure(clientId: number) {
    this.router.navigate(['/createMesure'], { queryParams: { clientId: clientId } });
  }
  private checkClientMeasures() {
    this.clients?.forEach((client) => {
      this.mesureService.getClientMeasureStatus(client.idClient).subscribe(
        (hasMeasure) => {
          this.clientMeasureMap[client.idClient] = hasMeasure;
        },
        (error) => console.log(error)
      );
    });
  }


}
