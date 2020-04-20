import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../../core/services/products/products.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getProduct(params.id);

    });
  }

  getProduct(id: string) {
    this.productsService.getProduct(id).subscribe(
      product => {
        this.product = product;
      }
    );
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: 'assets/images/hoodie.png',
      price: 1250,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct).subscribe(
      product => {
        console.log(product);
      }
    );
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 12150.00,
      description: 'edicion del producto prueba'
    };
    this.productsService.updateProduct('142', updateProduct).subscribe(
      product => {
        console.log(product);
      }
    );
  }

  deleteProduct() {
    this.productsService.deleteProduct('142').subscribe(
      product => {
        console.log(product);
      }
    );
  }

}
