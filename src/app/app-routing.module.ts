import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
  { path: 'login',         component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbarTest',
    component: NavbarComponent,
    canActivate: [ AuthGuard ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
