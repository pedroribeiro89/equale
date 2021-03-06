import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentCaseComponent} from './student-case/student-case.component';
import {StudentRegisterComponent} from './student-register/student-register.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aluno/:id', component: StudentCaseComponent },
  { path: 'cadastro', component: StudentRegisterComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
