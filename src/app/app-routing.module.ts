import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { Produit } from './shared/produit';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProduitResolver } from './produit/produit.roselver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'produit',
        component: ProduitComponent,
        resolve: {
          produits: ProduitResolver
        },
        outlet: 'contentOutlet'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'contentOutlet'
      },
    ]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
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
