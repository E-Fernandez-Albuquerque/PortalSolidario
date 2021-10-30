import { ProductsComponent } from './body/products/products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './template/side-menu/side-menu.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

const routes: Routes = [{
  path: "products",
  component: ProductsComponent
}, {
  path: "",
  component: LoginComponent
}, {
  path: "reset-password",
  component: ResetPwdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
