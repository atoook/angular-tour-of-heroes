import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/**
 * This tells the router to match that URL to 
 * path: 'heroes' and display the HeroesComponent 
 * when the URL is something like localhost:4200/heroes.
**/
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  /**
   * The following line 
   * adds the RouterModule to the AppRoutingModule imports array
   * and configures it with the routes in one step 
   * by calling RouterModule.forRoot():
   */
  imports: [RouterModule.forRoot(routes)],
  /**
   * AppRoutingModule exports RouterModule
   * to be available throughout the application.
   */
  exports: [RouterModule]
})
export class AppRoutingModule { }
