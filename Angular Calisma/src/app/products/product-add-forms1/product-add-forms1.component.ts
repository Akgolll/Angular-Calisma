import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }

  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]      
    });
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    });
  }


  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name + " Başarıyla eklendi")
    });
  }
}
