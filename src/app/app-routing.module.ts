import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { Produit } from './shared/produit';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";


export const appRoutes: Routes = [
  {path: 'produit', component: ProduitComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ]
})
export class AppRoutingModule{

}
