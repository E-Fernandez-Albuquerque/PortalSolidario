import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './template/footer/footer.component';
import { SideMenuComponent } from './template/side-menu/side-menu.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './body/products/products.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewPwdComponent } from './new-pwd/new-pwd.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductsComponent,
    LoginComponent,
    ResetPwdComponent,
    NewPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule, 
    MatListModule, 
    MatSidenavModule, 
    FormsModule,
    MatInputModule, 
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
