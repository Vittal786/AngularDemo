import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {CarouselModule} from 'primeng/carousel';
import { Lazycom1Component } from './lazycom1.component';

const routes:Routes = [
  {path:'', component:Lazycom1Component}
]

@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
