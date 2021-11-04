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
import { LoginComponent } from './tela-login/login/login.component'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { ResetPwdComponent } from './tela-login/reset-pwd/reset-pwd.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewPwdComponent } from './tela-login/new-pwd/new-pwd.component';
import { ImgLoginComponent } from './tela-login/img-login/img-login.component';
import { HelpHeaderComponent } from './help/help-header/help-header.component';
import { HelpFooterComponent } from './help/help-footer/help-footer.component';
import { HelpBodyComponent } from './help/help-body/help-body.component';
import { InstitucionalComponent } from './body/institucional/institucional.component';
import { DadosBasicosComponent } from './body/dados-basicos/dados-basicos.component'
import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductsComponent,
    LoginComponent,
    ResetPwdComponent,
    NewPwdComponent,
    ImgLoginComponent,
    HelpHeaderComponent,
    HelpFooterComponent,
    HelpBodyComponent,
    InstitucionalComponent,
    DadosBasicosComponent
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
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
