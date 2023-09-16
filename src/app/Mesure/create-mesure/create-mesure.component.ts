import { Component, OnInit } from '@angular/core';
import { Mesure } from '../mesure';
import { MesureService } from '../mesure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Clients/client.service';
import { Client } from 'src/app/Clients/client';

@Component({
  selector: 'app-create-mesure',
  templateUrl: './create-mesure.component.html',
  styleUrls: ['./create-mesure.component.css']
})
export class CreateMesureComponent implements OnInit {
  constructor(
    private mesureService: MesureService,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  clientId: number | undefined;
  client: Client | undefined;
  clientName: string | undefined;


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.clientId = params['clientId'];
      this.loadClient();
    });
  }

  // 
  loadClient() {
    if (this.clientId) {
      this.clientService.getClientById(this.clientId).subscribe((client) => {
        this.client = client;
        this.clientName = `${client.prenom} ${client.nom}`;
        this.mesure.client = client;
      });
    }
  }


  mesure: Mesure = new Mesure();

  saveMesure() {
    this.mesureService.createMesure(this.mesure).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToMesureList();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  redirectToMesureList() {
    this.router.navigate(['/listMesure']);
  }

  onSubmit() {
    console.log(this.mesure);
    this.saveMesure();
  }
}
