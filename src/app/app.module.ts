import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {ButtonModule} from 'primeng/button';
// import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './pages/public/welcome/welcome.component';

import { HeaderComponent } from './pages/common/header/header.component';
import{ InputTextModule} from 'primeng/inputtext';
import { DashboardComponent } from './pages/public/dashboard/dashboard.component';
import { IncomeComponent } from './pages/public/income/income.component';
import { ExpenseComponent } from './pages/public/expense/expense.component';
import { SavingComponent } from './pages/public/saving/saving.component';
import { LoginComponent } from './pages/public/login/login.component';

import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorInterceptor } from './pages/core/auth/interceptor.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    SavingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    // DashboardModule
  ],
  providers: [InterceptorInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }