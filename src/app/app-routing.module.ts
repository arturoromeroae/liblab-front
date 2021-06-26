import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path: 'clientes', component: ClientsComponent},
  {path: 'inicio', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
