import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { Products2Component } from './products2/products2.component';
import { AdminproductdetailsComponent } from './adminproductdetails/adminproductdetails.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"adminproducts", component:Products2Component},
  {path:"product-details/:productid", component:ProductsDetailsComponent},
  {path:"admin-product-details/:id", component:AdminproductdetailsComponent},
  {path:"about" , component:AboutComponent},
  {path:"login", component:LoginComponent},
  {path:"admin",canActivate:[authGuard],loadChildren:()=>import('./admin/admin.module').then(
    m=>m.AdminModule
  )

  },


  {path:"contact", component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"payment", component:PaymentComponent},
  {path:"**",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
