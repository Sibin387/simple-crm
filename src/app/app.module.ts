import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EnquiriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
