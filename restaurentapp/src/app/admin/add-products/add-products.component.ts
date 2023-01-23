import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductserviceService } from 'src/app/products/service/productservice.service';

export interface DialogData {
  name: string;
  price: number;
  description: string;
  isEdit: boolean;
  id: number
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {

  name=''
  price=0
  description=''
  isEdit = false;
  id = 0;
  //inject productservice in the constructor
  constructor(
    public dialogRef: MatDialogRef<AddProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private productservice:ProductserviceService
  ) {}

  ngOnInit() {
    this.name = this.data.name;
    this.price = this.data.price;
    this.description = this.data.description;
    this.id = this.data.id;
    if (this.data.isEdit) {
      this.isEdit = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(){
   //create method add product  on productservice  and pass name,price,description as object
   this.productservice.addproduct(this.name,this.price,this.description)
   .subscribe((resp)=>{
    this.dialogRef.close();
    this.productservice.productnotifier.next();
   })
   
  }

  onEdit() {
    this.productservice.updateProduct({name: this.name, price: this.price, description: this.description, id: this.id});
    this.dialogRef.close();
  }

  onkp() {
    // this.productservice.productnotifier.next();
  }

}
