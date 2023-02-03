import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { Produit } from './shared/produit';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProduitResolver } from './produit/produit.roselver';


export const appRoutes: Routes = [
  {
    path: 'produit',
    component: ProduitComponent,
    resolve: {
      produits: ProduitResolver
    }
  },
  {path: 'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  exports: [RouterModule],
  providers: [ProduitResolver],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ]
})
export class AppRoutingModule{

}
