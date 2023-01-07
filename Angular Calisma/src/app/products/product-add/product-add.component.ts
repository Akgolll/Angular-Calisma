import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddComponent implements OnInit {

  constructor(private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }

  model: Product = new Product();
  categories: Category[];



  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    });
  }

  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + " Başarıyla eklendi")
     });

  }
}
