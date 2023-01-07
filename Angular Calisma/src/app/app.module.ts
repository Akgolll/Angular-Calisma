import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { AlertifyService } from './Services/alertify.service';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductAddForms1Component } from './products/product-add-forms1/product-add-forms1.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { UpdatePrdoductComponent } from './update-prdoduct/update-prdoduct.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductsComponent,
    ProductFilterPipe,
    ProductAddComponent,
    ProductAddForms1Component,
    LoginComponent,
      UpdatePrdoductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
