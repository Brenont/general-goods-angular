import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { QmsomosComponent } from './containers/qmsomos/qmsomos.component';
import { ContatoComponent } from './containers/contato/contato.component';
import { ModalSetupComponent } from './components/modal-setup/modal-setup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'quem-somos', component: QmsomosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'dev-b', component: ModalSetupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
