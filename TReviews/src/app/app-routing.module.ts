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
  {
    path: 'creview/:id',
    loadChildren: () => import('./screens/creview/creview.module').then( m => m.CreviewPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

