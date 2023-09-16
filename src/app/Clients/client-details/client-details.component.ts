import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { MesureService } from 'src/app/Mesure/mesure.service';
import { Mesure } from 'src/app/Mesure/mesure';


// @Component({
//   selector: 'app-client-details',
//   templateUrl: './client-details.component.html',
//   styleUrls: ['./client-details.component.css']
// })
// export class ClientDetailsComponent implements OnInit {
//   id!: number;
//   client: Client = new Client();

//   constructor(private route: ActivatedRoute, private router: Router,
//     private clientService: ClientService, private mesureService: MesureService) { }

//   mesureId !: number;
//   mesure: Mesure | undefined;
//   ngOnInit() { }

//   // ngOnInit() {
//   //   this.client = new Client();
//   //   this.mesure = new Mesure();

//   //   this.id = this.route.snapshot.params['id'];
//   //   this.mesureId = this.route.snapshot.params['mesureId'];
//   //   this.clientService.getClientById(this.id)
//   //     .subscribe(data => {
//   //       console.log(data)
//   //       this.client = data;
//   //     },
//   //       error => console.log(error));
//   //   this.mesureService.getMesureById(this.mesureId)
//   //     .subscribe(data => {
//   //       console.log(data)
//   //       this.mesure = data;
//   //     },
//   //       error => console.log(error));
//   // }
//   clientDetails(clientId: number) {
//     // Appelez le service pour obtenir les détails du client
//     this.clientService.getClientById(clientId).subscribe(
//       (clientData) => {
//         console.log("Client details:", clientData);
//         this.client = clientData;
//       },
//       (error) => console.log(error)
//     );

//     // Appelez le service pour obtenir les détails de la mesure
//     this.mesureService.getMesureById(this.mesureId).subscribe(
//       (mesureData) => {
//         console.log("Mesure details:", mesureData);
//         this.mesure = mesureData;
//       },
//       (error) => console.log(error)
//     );
//   }


//   list() {
//     this.router.navigate(['listClient']);
//   }

// }


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id!: number;
  clientWithMesure: any = {};
  mesureId!: number;
  client: Client = new Client();
  mesure: Mesure | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private mesureService: MesureService
  ) { }

  // ngOnInit() {
  // this.id = this.route.snapshot.params['id'];
  // this.mesureId = this.route.snapshot.params['mesureId'];
  // this.clientDetails(this.id);
  // }

  //clientDetails(clientId: number) {
  // Récupérer les détails du client
  //this.clientService.getClientById(clientId).subscribe(
  // (clientData) => {
  //   console.log("Client details:", clientData);
  //  this.client = clientData;

  // Maintenant que vous avez le client, appelez le service pour obtenir les détails de la mesure
  // this.mesureService.getMesureById(this.mesureId).subscribe(
  // (mesureData) => {
  //   console.log("Mesure details:", mesureData);
  // this.mesure = mesureData;

  //  },
  // (error) => console.log(error)
  //  );
  //},
  //  (error) => console.log(error)
  //);
  //}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.mesureId = this.route.snapshot.params['mesureId'];
    this.clientService.getClientById(this.id).subscribe(
      (clientData) => {
        console.log("Client details:", clientData);
        this.client = clientData;

        // Maintenant que vous avez le client, appelez le service pour obtenir les détails de la mesure
        this.mesureService.getMesureById(this.client.mesure.idMesure).subscribe(
          (mesureData) => {
            console.log("Mesure details:", mesureData);
            this.mesure = mesureData;
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }
  // ngOnInit() {
  //   this.id = this.route.snapshot.params['id'];
  //   this.clientService.getClientWithMesureById(this.id).subscribe(
  //     (data) => {
  //       console.log("Client details:", data);
  //       this.clientWithMesure = data;
  //     },
  //     (error) => console.log(error)
  //   );
  // }


  list() {
    this.router.navigate(['listClient']);
  }
}
