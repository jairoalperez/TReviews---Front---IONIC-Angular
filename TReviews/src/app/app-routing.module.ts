import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./screens/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./screens/movie/movie.module').then( m => m.MoviePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./screens/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./screens/review/review.module').then( m => m.ReviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

