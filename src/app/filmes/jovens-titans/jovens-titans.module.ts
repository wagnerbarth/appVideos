import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JovensTitansPageRoutingModule } from './jovens-titans-routing.module';

import { JovensTitansPage } from './jovens-titans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JovensTitansPageRoutingModule
  ],
  declarations: [JovensTitansPage]
})
export class JovensTitansPageModule {}
