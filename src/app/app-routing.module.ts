import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "customer", loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
