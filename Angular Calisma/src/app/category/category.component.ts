import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../Services/category.service';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient, private categoryService: CategoryService, private alertifyService: AlertifyService) { }

  title = "Kategori Listesi";
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    });
  }

}
