import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { QmsomosComponent } from './containers/qmsomos/qmsomos.component';
import { ContatoComponent } from './containers/contato/contato.component';
import { ModalSetupComponent } from './components/modal-setup/modal-setup.component';
import { AdminComponent } from './containers/admin/admin.component';
import { LoginComponent } from './containers/login/login.component';
import { CarrinhoComponent } from './containers/carrinho/carrinho.component';
import { AddProductComponent } from './containers/admin/add-product/add-product.component';
import {AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { EditProductComponent } from './containers/admin/edit-product/edit-product.component';
import { BudgetComponent } from './containers/budget/budget.component';

const routes: Routes = [  
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'quem-somos', component: QmsomosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'dev-b', component: BudgetComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/add-product', component: AddProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'admin-menu', component: AdminMenuComponent},
  {path: 'admin/edit-product', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
