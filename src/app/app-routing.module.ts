import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    'path': '',
    'loadChildren': () => import('@modules/products/products.module').then(m => m.ProductsModule)
   },
   {
    'path': 'products',
    'loadChildren': () => import('@modules/products/products.module').then(m => m.ProductsModule)
   },
   {
    'path': 'cart',
    'loadChildren': () => import('@modules/cart/cart.module').then(m => m.CartModule)
   },
   { path: '**', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
