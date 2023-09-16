import { Component, OnInit } from '@angular/core';
import { Mesure } from '../mesure';
import { MesureService } from '../mesure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-mesure',
  templateUrl: './list-mesure.component.html',
  styleUrls: ['./list-mesure.component.css']
})
export class ListMesureComponent implements OnInit {
  ngOnInit(): void {
    this.getMesure();
  }
  mesure: Mesure[] | undefined;
  constructor(private mesureService: MesureService, private router: Router) { }

  private getMesure() {
    this.mesureService.getListMesure().subscribe(data => this.mesure = data);
  }
  mesureDetails(id: number) {
    this.router.navigate(['detailMesure', id]);
  }


  updateMesure(id: number) {
    this.router.navigate(['updateMesure', id]);
  }
  deleteMesure(id: number) {
    this.mesureService.deleteMesure(id).subscribe(data => {
      console.log(data);
      this.getMesure();
    });
  }


}
