import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home' , component: HomePageComponent },
  { path: 'signup' , component: SignupPageComponent },
  { path: 'login' , component: LoginPageComponent },
  { path: '' , component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
