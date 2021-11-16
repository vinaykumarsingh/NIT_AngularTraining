import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1Component1Component } from './lazy1Component1/lazy1Component1.component';

const routes: Routes = [
  {path: '', component: Lazy1Component1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
