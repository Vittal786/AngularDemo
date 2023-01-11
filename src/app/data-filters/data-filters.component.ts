import { Component, OnInit } from '@angular/core';
import { SelectItem,FilterService,FilterMatchMode } from 'primeng/api';
import { pipeline } from 'stream';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Pipe, PipeTransform} from '@angular/core';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-data-filters',
  templateUrl: './data-filters.component.html',
  styleUrls: ['./data-filters.component.scss'],
  providers:[MessageService]
})


export class DataFiltersComponent implements OnInit {
   searchText:any;

   student=[
{id:11,name:"Vittal",address:"MindSpace"},
{id:12,name:"Sai",address:"Shilpararam"},
{id:13,name:"Dinesh",address:"Lakdikapool"},
{id:14,name:"Niharika",address:"Venkatapuram"},
{id:15,name:"Ramya",address:"Madhapur"},
{id:61,name:"Karim",address:"Peddama Temple"},
{id:72,name:"Nithin",address:"Sr Nagar"},
{id:83,name:"Gayatri",address:"LBNagar"},
{id:94,name:"Satyam",address:"Mehadipatnam"},
{id:25,name:"Rajini",address:"Hitech City"},
{id:85,name:"Krishna",address:"Ameerpet"},
   ]
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig)
  {

  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }



showError() {
  this.messageService.add({severity:'error', summary: 'Nothing to Do', detail: 'Please Dont Click '});
}



}
