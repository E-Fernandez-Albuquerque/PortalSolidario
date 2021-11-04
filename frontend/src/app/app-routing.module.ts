import { ProductsComponent } from './body/products/products.component';
import { CadastroSiteComponente} from './body/cadastroSite/cadastroSite.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tela-login/login/login.component';
import { SideMenuComponent } from './template/side-menu/side-menu.component';
import { ResetPwdComponent } from './tela-login/reset-pwd/reset-pwd.component';
import { NewPwdComponent } from './tela-login/new-pwd/new-pwd.component';
import { HelpBodyComponent } from './help/help-body/help-body.component';
import { InstitucionalComponent } from './body/institucional/institucional.component';
import { DadosBasicosComponent } from './body/dados-basicos/dados-basicos.component';
import { MainComponent } from './main/main.component';

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
}, {
  path: "help", 
  component: HelpBodyComponent
},{
  path: "institucional", 
  component: InstitucionalComponent
},{
  path: "dados-basicos", 
  component: DadosBasicosComponent
}, {
  path: "", 
  component: MainComponent
},{
  path:"cadastroSite",
  component: CadastroSiteComponente
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
