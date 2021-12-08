import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { CatMenComponent } from './cat-men/cat-men.component';
import { CatWomenComponent } from './cat-women/cat-women.component';
import { CatJewelComponent } from './cat-jewel/cat-jewel.component';
import { CatElectComponent } from './cat-elect/cat-elect.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartGuardGuard } from './cart-guard.guard';

const routes: Routes = [
  {
    path:'',
    component:ProductslistComponent
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
