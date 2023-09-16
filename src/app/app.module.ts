import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './Clients/create-client/create-client.component';
import { UpdateClientComponent } from './Clients/update-client/update-client.component';
import { ClientDetailsComponent } from './Clients/client-details/client-details.component';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateMesureComponent } from './Mesure/create-mesure/create-mesure.component';
import { UpdateMesureComponent } from './Mesure/update-mesure/update-mesure.component';
import { ListMesureComponent } from './Mesure/list-mesure/list-mesure.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    HomeComponent,
    CreateMesureComponent,
    UpdateMesureComponent,
    ListMesureComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
