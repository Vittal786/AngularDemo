import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazycom1Component } from './lazycom1/lazycom1.component';
import { Lazycom2Component } from './lazycom2/lazycom2.component';


@NgModule({
  declarations: [
    Lazycom1Component,
    Lazycom2Component
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ]
})
export class Lazy1Module { }
