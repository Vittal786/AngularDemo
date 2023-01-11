import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaycontentComponent } from './displaycontent/displaycontent.component';
import { EditsComponent } from './edits/edits.component';
import { MenuComponent } from './menu/menu.component';

import { SearchComponent } from './search/search.component';
import { Lazy1Module } from './lazy1/lazy1.module';
import { Lazycom1Component } from './lazy1/lazycom1/lazycom1.component';
import { Lazycom2Component } from './lazy1/lazycom2/lazycom2.component';

import { HttpserviceComponent } from './httpservice/httpservice.component';
import { DialogComponent } from './dialog/dialog.component';

import { Database1Component } from './database1/database1.component';
import { ContentDisComponent } from './content-dis/content-dis.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HomeimageComponent } from './homeimage/homeimage.component';
import { DataFiltersComponent } from './data-filters/data-filters.component';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { PipescomComponent } from './pipescom/pipescom.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { EventbinComponent } from './eventbin/eventbin.component';
import { ChildcomComponent } from './childcom/childcom.component';




const routes: Routes = [
    
      {
        path:'dial',component:DialogComponent
      },
      
       
       {path:'sear',
       component:SearchComponent
       },
    
      {path:'view',
       component:ViewDetailsComponent
      },    
      {
        path:'',component:HomeimageComponent
      },
      
      {
        path:'men',component:MenuComponent
      },
      
      {
        path:'pipe',component:PipescomComponent
      },
      {
        path:'contentd',component:ContentDisComponent
      },
      {
        path:'dbase',component:Database1Component
      },
      {
        path:'dis',component:DisplaycontentComponent
      },
      {
        path:'htser',component:HttpserviceComponent
      },
      {
        path:'dataf',component:DataFiltersComponent
      },
      {
        path:'eventemi',component:ComponentinteractionComponent
      },
      {
        path:'bind',component:BindingComponent
      },
      {
        path:'eve',component:EventbinComponent
      },
      {
        path:'ch',component:ChildcomComponent
      },
      {
        path:"lazyc1",
        loadChildren:() => import('./lazy1/lazy1.module').then((m) =>m.Lazy1Module) 
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
