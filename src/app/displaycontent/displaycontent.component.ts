import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycontent',
  templateUrl: './displaycontent.component.html',
  styleUrls: ['./displaycontent.component.scss']
})
export class DisplaycontentComponent implements OnInit {

    usersData:any = [
      {
        college: "CMR",
        fee: 100000,
        contact:"cmr@gmail.com"
      },
      {
        college:"CBIT",
        fee: 250000,
        contact:"cbit@gmail.com"
      },
      {
        college:"VJC",
        fee: 28000,
        contact: "vjc@gmail.com"
      },
      {
        college:"RSB",
        fee: 25000,
        contact:"rsb@gmail.com"
      },
      {
        college:"MLR",
        fee:50000,
        contact:"mlr@gmail.com"
      },
      {
        college:"MLR",
        fee:50000,
        contact:"mlr@gmail.com"
      },
      {
        college:"SLR",
        fee:60000,
        contact:"slr@gmail.com"
      },
      {
        college:"BLR",
        fee:70000,
        contact:"blr@gmail.com"
      },
    
    ]

  constructor() { }

  ngOnInit(): void {
  }


}
