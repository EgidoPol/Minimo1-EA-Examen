import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {RolesComponent} from './roles/roles.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'admin'},
  {path: 'admin', component: AdminComponent},
  {path: 'roles', component: RolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
