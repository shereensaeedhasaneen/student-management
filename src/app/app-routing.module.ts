import { PaginationComponent } from './components/pagination/pagination.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';

const routes: Routes = [
  {path:'add-student' , component:AddStudentComponent},
  {path:'edit-student' , component:EditStudentComponent},
  {path:'list-student' , component:ListStudentComponent},
  {path:'login' , component:LoginStudentComponent},
  {path:'register' , component:RegistrationStudentComponent},
  {path:'pagination' , component:PaginationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
