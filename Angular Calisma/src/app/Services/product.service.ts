import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../products/product';
import { observable, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId: any): Observable<Product[]> {

    let newPath = this.path;

    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }


    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.hangleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path, product,httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data))),catchError(this.hangleError)
      );
    
  }

  hangleError(errr: HttpErrorResponse) {
    let errorMessage = ""
    if (errr.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu." + errr.error.message
    } else {
      errorMessage = "Sistemsel bir hata!"
    }
    return throwError(errorMessage);
  }
}
