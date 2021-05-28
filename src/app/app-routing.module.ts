import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pets-monstruosos',
    loadChildren: () => import('./filmes/pets-monstruosos/pets-monstruosos.module').then( m => m.PetsMonstruososPageModule)
  },
  {
    path: 'jovens-titans',
    loadChildren: () => import('./filmes/jovens-titans/jovens-titans.module').then( m => m.JovensTitansPageModule)
  },
  {
    path: 'liga-justica',
    loadChildren: () => import('./filmes/liga-justica/liga-justica.module').then( m => m.LigaJusticaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
