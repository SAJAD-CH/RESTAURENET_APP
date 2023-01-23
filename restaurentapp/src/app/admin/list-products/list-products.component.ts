import { Component,EventEmitter,Input, Output, SimpleChanges } from '@angular/core';

import { ProductserviceService } from 'src/app/products/service/productservice.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  
  @Output() edititem=new EventEmitter<any>();
  displayedColumns: string[] = ['name', 'description', 'price','actions'];
  dataSource:any[]= [];
  mainsource:any[]=[];
  pageload="loading";
  loaded:any=false;
  @Input() searchString:String=''

  constructor(private productService:ProductserviceService){
    this.productService.productnotifier.subscribe(()=>{
      this.getFoodItems();
    })
  }

  ngOnInit(){
    this.getFoodItems()
  }

  ngOnChanges(changes: SimpleChanges){
    this.filterProducts()
  }
  filterProducts(){
    // console.log(this.searchString);
    
    this.dataSource=[];
   this.mainsource.forEach((product:any)=>{
    if (product.name.includes(this.searchString)) {
      this.dataSource.push(product)
    }
   })
   
  }

  getFoodItems(){
    this.pageload="loading";
    this.loaded=true
    this.productService.getfooditems()
    .subscribe((foodItems:any)=>{
      console.log('...',foodItems);
      setTimeout(()=>{
        this.pageload="completed";
      },0)
      // console.log(foodItems);
      
      this.dataSource=foodItems
      this.mainsource=foodItems
    },(err:any)=>{
      console.log(err);
      
    });
  }

  onDelete(id:any){
    this.productService.deleteProduct(id)
    this.productService.onDelete.subscribe(()=>{
      this.getFoodItems()
    })
  }
  onEdit(item: any) {
    this.edititem.emit(item);
  }


  

}
