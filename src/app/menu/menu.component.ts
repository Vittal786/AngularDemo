import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
     constructor(){}
  items!: MenuItem[];
    ngOnInit() {
        this.items = [
            {  
            label: 'Home',
            expanded:true,
            icon:'pi pi-fw pi-calendar',
            routerLink:['/'],

            items: [
                 
                   {
                    label: 'Angular Concepts',
                    expanded:true,
                    icon:'pi pi-fw pi-calendar-plus',
                    items: [
                        {
                        label: 'Form & Routings',
                         routerLink:['/dial'],
                        expanded:true,
                        icon:'pi pi-fw pi-calendar-plus',

                        },
                        {
                          label:'Component Interaction',
                          expanded:true,
                        //routerLink:['/eve'],
                        routerLink:['/ch'],
                          icon:'pi pi-fw pi-calendar-minus'
                          },
                        {
                          label: 'Interpolation & Directives',
                          expanded:true,
                          icon:'pi pi-fw pi-calendar-minus',
                          routerLink:['/dis'],
                          },

                          {
                            label: 'Pipes',
                            expanded:true,
                            routerLink:['/pipe'],
                            icon:'pi pi-fw pi-calendar-minus'
                            },
                        {
                        label:' Services' ,
                        expanded:true,
                        icon:'pi pi-fw pi-calendar-minus',
                        routerLink:['/htser'],
                        },

                        {
                          label: 'Data Filters',
                          expanded:true,
                         routerLink:['/dataf'],
                          icon:'pi pi-fw pi-calendar-minus',
                            },
                        
                          {
                            label: 'Binding',
                            expanded:true,
                            routerLink:['/bind'],
                            icon:'pi pi-fw pi-calendar-minus',
                              },
                              {
                                label: 'Life Cycle Hooks',
                                expanded:true,
                                routerLink:['/sear'],
                                icon:'pi pi-fw pi-calendar-minus',
                                  },
                                  
                                  

                    ]
                }, 
                
                {
                  label: 'Module & Lazy Loading',
                  expanded:true,
                  routerLink:['/lazy'],
                  icon:'pi pi-fw pi-calendar-times',
                  items: [
              
                      {
                          label: 'Lazy1',
                          expanded:true,
                          routerLink:['/lazyc1'],
                          icon:'pi pi-fw pi-calendar-minus'
                          },
                          {
                              label: 'Lazy2',
                              expanded:true,
                              routerLink:['/lazyc1/c2'],
                              icon:'pi pi-fw pi-calendar-minus',
                                },
                                
                  ]
              },
            ]
            }
        ]
    }
}
