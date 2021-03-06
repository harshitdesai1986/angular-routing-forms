import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DeactivateGuardService } from './deactivate-guard.service';
import { ActivateGuardService } from './activate-guard.guard';
import { ActivateChildGuardService } from './activate-child-guard.guard';
import { ProductResolveGuard } from './product-resolve.guard';
import { CanLoadGuard } from './can-load.guard';

const routes: Routes = [
  { path: 'userForm', component: UserFormComponent, canDeactivate: [DeactivateGuardService] },
  {
    path: 'products', component: ProductListComponent, canActivate: [ActivateGuardService], canActivateChild: [ActivateChildGuardService], resolve: { products: ProductResolveGuard },
    children: [{
      path: ':id', component: ProductDetailComponent, canDeactivate: [DeactivateGuardService]
    }]
  },
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule), canLoad: [CanLoadGuard] },
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule), canLoad: [CanLoadGuard] },
  { path: '', redirectTo: '/userForm', pathMatch: 'full' },
  { path: '**', redirectTo: '/userForm', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
