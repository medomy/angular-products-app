import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductitemComponent } from './components/productitem/productitem.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StockPipe } from './stock.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CatMenComponent } from './cat-men/cat-men.component';
import { CatWomenComponent } from './cat-women/cat-women.component';
import { CatJewelComponent } from './cat-jewel/cat-jewel.component';
import { CatElectComponent } from './cat-elect/cat-elect.component';

import { CartPageComponent } from './cart-page/cart-page.component';
import { LoadercompComponent } from './components/loadercomp/loadercomp.component';
import { LoaderintInterceptor } from './loaderint.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductitemComponent,
    ProductslistComponent,
    NavbarComponent,
    StockPipe,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ProductDetailsComponent,
    CatMenComponent,
    CatWomenComponent,
    CatJewelComponent,
    CatElectComponent,
    CartPageComponent,
    LoadercompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: LoaderintInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
