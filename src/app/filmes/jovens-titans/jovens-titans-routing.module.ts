import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JovensTitansPage } from './jovens-titans.page';

const routes: Routes = [
  {
    path: '',
    component: JovensTitansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JovensTitansPageRoutingModule {}
