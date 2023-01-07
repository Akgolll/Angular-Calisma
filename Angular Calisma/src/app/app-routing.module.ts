import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './products/product-add-forms1/product-add-forms1.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component: ProductsComponent },
  { path: 'product-add', component: ProductAddComponent, canActivate: [LoginGuard] },
  { path: 'product-add-forms1', component: ProductAddForms1Component, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
