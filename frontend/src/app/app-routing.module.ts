import { ProductsComponent } from './body/products/products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tela-login/login/login.component';
import { SideMenuComponent } from './template/side-menu/side-menu.component';
import { ResetPwdComponent } from './tela-login/reset-pwd/reset-pwd.component';
import { NewPwdComponent } from './tela-login/new-pwd/new-pwd.component';

const routes: Routes = [{
  path: "products",
  component: ProductsComponent
}, {
  path: "login",
  component: LoginComponent
}, {
  path: "reset-password",
  component: ResetPwdComponent
}, {
  path: "new-password", 
  component: NewPwdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
