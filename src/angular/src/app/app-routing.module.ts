import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckStatusLayoutComponent } from './layouts/check-status-layout/check-status-layout.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { OrderStatusLayoutComponent } from './layouts/order-status-layout/order-status-layout.component';
import { DetailOrderLayoutComponent } from './layouts/detail-order-layout/detail-order-layout.component';
import { DetailItemLayoutComponent } from './layouts/detail-item-layout/detail-item-layout.component';
import { CartLayoutComponent } from './layouts/cart-layout/cart-layout.component';
import { CatalogLayoutComponent } from './layouts/catalog-layout/catalog-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  {
    path: 'catalog',
    component: CatalogLayoutComponent,
  },
  {
    path: 'catalog/:id',
    component: DetailItemLayoutComponent,
  },
  { path: 'cart', component: CartLayoutComponent },
  { path: 'detail-item', component: DetailItemLayoutComponent },
  { path: 'detail-order', component: DetailOrderLayoutComponent },
  { path: 'order-status', component: OrderStatusLayoutComponent },
  { path: 'check-status', component: CheckStatusLayoutComponent },

  { path: 'chairs', component: CatalogLayoutComponent },
  { path: 'beds', component: CatalogLayoutComponent },
  { path: 'cupboards', component: CatalogLayoutComponent },
  { path: 'kitchens', component: CatalogLayoutComponent },
  { path: 'households', component: CatalogLayoutComponent },

  { path: 'chairs/:id', component: DetailItemLayoutComponent },
  { path: 'beds/:id', component: DetailItemLayoutComponent },
  { path: 'cupboards/:id', component: DetailItemLayoutComponent },
  { path: 'kitchens/:id', component: DetailItemLayoutComponent },
  { path: 'households/:id', component: DetailItemLayoutComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
