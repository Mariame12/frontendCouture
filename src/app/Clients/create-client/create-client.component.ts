import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  client: Client = new Client();
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  saveClient() {
    this.clientService.createClient(this.client).subscribe({
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
    this.router.navigate(['/listClient']);
  }

  onSubmit() {
    console.log(this.client);
    this.saveClient();
  }

}
