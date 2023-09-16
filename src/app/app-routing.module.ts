import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import { CreateClientComponent } from './Clients/create-client/create-client.component';
import { UpdateClientComponent } from './Clients/update-client/update-client.component';
import { ClientDetailsComponent } from './Clients/client-details/client-details.component';
import { HomeComponent } from './home/home.component';
import { ListMesureComponent } from './Mesure/list-mesure/list-mesure.component';
import { CreateMesureComponent } from './Mesure/create-mesure/create-mesure.component';
import { UpdateMesureComponent } from './Mesure/update-mesure/update-mesure.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  //client
  { path: 'listClient', component: ClientListComponent },
  { path: 'createClient', component: CreateClientComponent },
  { path: 'updateClient/:id', component: UpdateClientComponent },
  { path: 'detailClient/:id', component: ClientDetailsComponent },
  //Mesure
  { path: 'listMesure', component: ListMesureComponent },
  { path: 'createMesure', component: CreateMesureComponent },
  { path: 'updateMesure/:id', component: UpdateMesureComponent },
  //accueil
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
