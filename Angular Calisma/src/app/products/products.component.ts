import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../Services/alertify.service';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private accountService: AccountService, private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  title = "Ürün Listesi";
  filterText = ""
  products: Product[];


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      });
    })


  }
  addToCart(product: string) {
    this.alertifyService.success(product + " Sepete Eklenmiştir.")
  }
  updatePrd(product:string){
    this.alertifyService.error(product + " Şu anda güncellenemez.")
  }
  isLoggedIn(){
    if (this.accountService.isLoggedIn()) {
      return true
    }return false;
  }

}
