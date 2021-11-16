import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1Componnet1.routing.module';
import { Lazy1Component1Component } from './lazy1Component1/lazy1Component1.component';

@NgModule({
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ],
  declarations: [Lazy1Component1Component]
})
export class Lazy1Module { }
