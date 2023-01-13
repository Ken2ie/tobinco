import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dashboard/user/dash/dash.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProductsComponent } from './dashboard/products/products.component';
import { AuthService } from './dashboard/user/auth.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


const appRoute : Routes = [
  {path : '' , component:DashComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DashComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [AuthService,  { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
