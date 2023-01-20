import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module')
    .then(mdl=>mdl.AdminModule)
  },
  {
    path:'food-items',
    loadChildren:()=>import('./products/products.module')
    .then(mdl=>mdl.ProductsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
