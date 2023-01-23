import { Injectable } from '@angular/core';
import { fooditems } from '../data/food-items';
import {Observable,of,Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  products= fooditems
  productnotifier = new Subject<void>();
  onDelete=new Subject<void>();
  
  

  constructor(
    private http:HttpClient) {

   }
// ["s_1","s_2","s_3"]
  getfooditems():Observable<any>{
    return this.http.get('http://localhost:3000/product/list')
  }

//   getRests(): Observable<any> {
// return of([''])
//   }

  addproduct(name:any,price:any,description:any):Observable<any>{
    const newProduct=Object.assign({},{
      "name": name,
        "description":description,
        "id": 2,
        "price": price,
        "iconname": 'biriyani',
        "rating": 3
    })
    console.log('newproduct',newProduct);
    return this.http.post('http://localhost:3000/product',newProduct)
    
    // this.products.push(newProduct)
    // this.productnotifier.next()
  }


  deleteProduct(id:any){
    this.products.splice(this.products.findIndex(a=>a.id===id),1)
    console.log(this.products);
    this.onDelete.next()
  }
  editProduct(id:any){
    var data=this.products.splice(this.products.findIndex(a=>a.id===id),1)
    console.log(this.products);
    this.onDelete.next()
    
  }
  updateProduct(product: any){
    this.products.forEach((item: any) => {
      if (product.id === item.id) {
        item.name = product.name;
        item.price = product.price;
        item.description = product.description;
      }
    });
    this.productnotifier.next();
  }


}
