import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  id!: number;

  client: Client = new Client();

  constructor(private clientService: ClientService,
    private route: ActivatedRoute, private router: Router) { }

  private getClientById() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe({
      next: (data) => {
        this.client = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getClientById();
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.client).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToClientList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToClientList() {
    this.router.navigate(['listClient']);
  }
  onSubmit() {
    console.log(this.client);
    this.updateClient();
  }

}
