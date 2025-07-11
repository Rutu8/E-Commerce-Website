import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { PoductlistComponent } from './poductlist/poductlist.component';
import { authGuard } from '../auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{path:"",component:LandingPageComponent, pathMatch:'full'},
{path:"dashboard", canActivate:[authGuard],component:DashboardComponent},
{path:"productsadmin", canActivate:[authGuard],component:ProductsadminComponent},//add authguard inside page
{path:'productlist',canActivate:[authGuard], component:PoductlistComponent},
{path:"productlist/:id",canActivate:[authGuard], component:PoductlistComponent},
{path:"orders",canActivate:[authGuard], component:OrdersComponent},
{path:"ordersDetails", canActivate:[authGuard], component:OrdersDetailsComponent},
]





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
