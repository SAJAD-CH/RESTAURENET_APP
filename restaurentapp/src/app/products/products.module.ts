import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ProductsRoutingModule } from './service/products-routing.module';




@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    ProductsRoutingModule
  ],exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }
