import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartGuardGuard } from './cart-guard.guard';
import { ErrorComponent } from './components/error/error.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CatElectComponent } from './pages/cat-elect/cat-elect.component';
import { CatJewelComponent } from './pages/cat-jewel/cat-jewel.component';
import { CatMenComponent } from './pages/cat-men/cat-men.component';
import { CatWomenComponent } from './pages/cat-women/cat-women.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductslistComponent } from './pages/productslist/productslist.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:ProductslistComponent,
  },
  {
    path:'Access',
    children:[
      {
        path:'log-in',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
    ]
  },
  {
    path:'Men',
    component:CatMenComponent
  },
  {
    path:'Women',
    component:CatWomenComponent
  },
  {
    path:'Jewel',
    component:CatJewelComponent
  },
  {
    path:'Electronics',
    component:CatElectComponent
  },
  {
    path:'Details/:id',
    component:ProductDetailsComponent

  },
  {
    path:'Cart',
    component:CartPageComponent,
    canActivate : [CartGuardGuard]

  },
  {
    path:'**',
    component:ErrorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
