import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemoService } from './services/demo.service';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
const routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"about", component:AboutComponent},
  {path:"services", component:ServicesComponent},
  {path:"add", component:AddComponent},
  {path:"update/:id", component:UpdateComponent},
  {path:"**", component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ErrorComponent,
    ServicesComponent,
    HomeComponent,
    UsersComponent,
    UserItemComponent,
    UserDetailsComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
