import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<any>(`${environment.URLAPI}/products`);
  }

  getProduct(id: string) {
    return this.httpClient.get<any>(`${environment.URLAPI}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post(`${environment.URLAPI}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.httpClient.put<any>(`${environment.URLAPI}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete<any>(`${environment.URLAPI}/products/${id}`);
  }

}
