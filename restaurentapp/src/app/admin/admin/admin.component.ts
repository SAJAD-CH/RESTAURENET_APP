import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductserviceService } from 'src/app/products/service/productservice.service';
import { AddProductsComponent } from './../add-products/add-products.component'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  name: string = '';
  search:string=''

  constructor(
    public dialog: MatDialog,
    private ser: ProductserviceService
    ) {}

  openAddProduct() {
    const dialogRef = this.dialog.open(AddProductsComponent, {
      height: '350px',
      width: '600px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  edit(item: any) {
    item.isEdit = true;
    this.dialog.open(AddProductsComponent, {
      height: '350px',
      width: '600px',
      data: item
    });
  }
}