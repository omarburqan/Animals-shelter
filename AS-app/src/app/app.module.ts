import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';
import { Routes, RouterModule } from '@angular/router'
import { AppboolService } from './appbool.service';
import { VolunteersService } from './volunteer/volunteers.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { EventComponent } from './event/event.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { CreateVolComponent } from './volunteer/create-vol/create-vol.component';
import { VolListComponent } from './volunteer/vol-list/vol-list.component';
import { VolNavbarComponent } from './volunteer/vol-navbar/vol-navbar.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { OneVolComponent } from './volunteer/one-vol/one-vol.component';
import { EventService } from './event/event.service';
import { FilterPipe } from './event/filter.pipe';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventsListComponent } from './event/events-list/events-list.component';
import { DonorComponent } from './donor/donor.component';
import { MatButtonModule,MatInputModule} from "@angular/material"
import {MatExpansionModule} from '@angular/material/expansion';
import { DonorListComponent } from './donor/donor-list/donor-list.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'Header',canActivate:[AuthGuard], component: HeaderComponent, children: [
      {
        path: 'volenteer', component: VolunteerComponent, children: [
          { path: 'addVolunteer', component: CreateVolComponent },
          {
            path: 'VolunteerEvents', component: EventComponent, children: [{ path: 'addEvent', component: AddEventComponent },
            { path: 'eventsList', component: EventsListComponent }]
          },
          { path: 'VolunteersList', component: VolListComponent }
        ]
      },
      { path: 'users', component: UsersComponent },
      { path: 'main', component: DashBoardComponent }
    ]
  },

  { path: '', component: LoginComponent },

  { path: 'volenteer-events', component: EventComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    HeaderComponent,
    UsersComponent,
    VolunteerComponent,
    EventComponent,
    NavBarComponent,
    CreateVolComponent,
    VolListComponent,
    VolNavbarComponent,
    UsersListComponent,
    OneVolComponent,
    AddUserComponent,
    FilterPipe,
    AddEventComponent,
    EventsListComponent,
    DonorComponent,
    DonorListComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [UserService,
    VolunteersService,
    AppboolService, EventService,
    AuthService,AuthGuard
  ],
  bootstrap: [AppComponent]




})
export class AppModule { }