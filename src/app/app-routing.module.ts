import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form', 
    loadChildren: () => import('./pages/form/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./pages/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./pages/bible/bible.module').then( m => m.BiblePageModule)
  },
  {
    path: 'identification',
    loadChildren: () => import('./pages/identification/identification.module').then( m => m.IdentificationPageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./pages/bible/bible.module').then( m => m.BiblePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
