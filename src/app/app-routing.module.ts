import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ServicesComponent } from './services/services.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path: "todos", component: TodosComponent},
  {path: "data-binding", component: DataBindingComponent},
  { path: "services", component: ServicesComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "register", component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
