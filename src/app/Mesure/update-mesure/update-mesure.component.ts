import { Component, OnInit } from '@angular/core';
import { Mesure } from '../mesure';
import { MesureService } from '../mesure.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-mesure',
  templateUrl: './update-mesure.component.html',
  styleUrls: ['./update-mesure.component.css']
})
export class UpdateMesureComponent implements OnInit {
  id!: number;
  mesure: Mesure = new Mesure();
  constructor(private mesureService: MesureService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.getMesureById();
  }

  private getMesureById() {
    this.id = this.route.snapshot.params['id'];
    this.mesureService.getMesureById(this.id).subscribe({
      next: (data) => {
        this.mesure = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  updateMesure() {
    this.mesureService.updateMesure(this.id, this.mesure).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToMesureList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToMesureList() {
    this.router.navigate(['listMesure']);
  }
  onSubmit() {
    console.log(this.mesure);
    this.updateMesure();
  }
}
