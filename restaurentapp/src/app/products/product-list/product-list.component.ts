import { Component } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  fooditemss:any[]=[];

  constructor(private productservice:ProductserviceService){}

  ngOnInit():void{
    this.getfooditems();
  }

  getfooditems(){
    this.productservice.getfooditems()
    .subscribe((fooditems)=>{
      this.fooditemss=fooditems;
      console.log(this.fooditemss);
      
    })
  }

}
