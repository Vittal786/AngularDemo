import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, ROUTES, RoutesRecognized} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }   from './app.component';
import { PanelMenuModule } from 'primeng/panelmenu';

import { EditsComponent } from './edits/edits.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing.module';
import {ImageModule} from 'primeng/image';
import{SlideMenuModule} from 'primeng/slidemenu';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { TestService } from './test.service';
import { DisplaycontentComponent } from './displaycontent/displaycontent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import {FormBuilder} from '@angular/forms';
import {CardModule} from 'primeng/card';
import { DialogComponent } from './dialog/dialog.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, Routes } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { Database1Component } from './database1/database1.component';
import { ContentDisComponent } from './content-dis/content-dis.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BanerComponent } from './baner/baner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeimageComponent } from './homeimage/homeimage.component';
import {ToastModule} from 'primeng/toast';
//import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { DataFiltersComponent } from './data-filters/data-filters.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { PipescomComponent } from './pipescom/pipescom.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { EventbinComponent } from './eventbin/eventbin.component';
import { ParentcomComponent } from './parentcom/parentcom.component';
import { ChildcomComponent } from './childcom/childcom.component';
import { LifeHookssComponent } from './life-hookss/life-hookss.component';
@NgModule({
  declarations: [ 
    AppComponent,SearchComponent,EditsComponent, MenuComponent,
     DisplaycontentComponent, HttpserviceComponent, DialogComponent, DatabaseComponent, 
      Database1Component, ContentDisComponent,ViewDetailsComponent, BanerComponent, 
       FooterComponent, HomeimageComponent, DataFiltersComponent, 
       ChildComponent, BindingComponent, PipescomComponent, 
       ComponentinteractionComponent, EventbinComponent, ParentcomComponent, ChildcomComponent, LifeHookssComponent],
  imports: [
    MenubarModule,
    TieredMenuModule,
    MenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule,CardModule,
    ImageModule,
    SlideMenuModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RippleModule,
    InputTextareaModule,
    InputNumberModule,
    RadioButtonModule,
    SelectButtonModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    CardModule,
    FormsModule
    
  ],
  exports:[RouterModule],
  providers: [TestService],
  bootstrap:    [ AppComponent ]
 
})

export class AppModule { }







