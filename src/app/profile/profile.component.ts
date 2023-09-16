import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // currentUser: any;

  // constructor(private storageService: StorageService) { }

  // ngOnInit(): void {
  //   this.currentUser = this.storageService.getUser();
  // }
  currentUser: any;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.href = '/login';
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
