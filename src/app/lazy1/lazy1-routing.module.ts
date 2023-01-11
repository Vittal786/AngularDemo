import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazycom1Component } from './lazycom1/lazycom1.component';
import { Lazycom2Component } from './lazycom2/lazycom2.component';
const routes: Routes = [

  {
    path:'',
    component:Lazycom1Component
  },
  {
    path:'c2',
    component:Lazycom2Component
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
