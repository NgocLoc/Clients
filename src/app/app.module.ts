import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from'@angular/router';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { DetailsComponent } from './details/details.component';
import { New1sComponent } from './new1s/new1s.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { Http, HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes:Routes=
  [
    {path:'home', component:HomeComponent},
    {path:'details', component:DetailsComponent},
    {path:'teachers', component:TeachersComponent},
    {path:'new1s', component: New1sComponent},
    {path:'contacts', component:ContactsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'courses', component:CoursesComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    TeachersComponent,
    DetailsComponent,
    New1sComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
