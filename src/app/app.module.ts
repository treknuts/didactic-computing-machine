import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TodosComponent } from './todos/todos.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { environment } from 'environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    TodosComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
