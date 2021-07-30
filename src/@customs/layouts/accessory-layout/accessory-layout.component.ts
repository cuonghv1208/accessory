import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-accessory-layout',
  templateUrl: './accessory-layout.component.html',
  styleUrls: ['./accessory-layout.component.scss']
})
export class AccessoryLayoutComponent implements OnInit {

  constructor() { }

  items: NbMenuItem[] = [];
  locations: string[] = [];

  ngOnInit(): void {
    this.items = [
      {
        title: 'Logo',
        link: '/'
      },
      {
        title: 'Search',
        link: '/dashboard'
      }
    ];
     this.locations = [
      'Hà Nội', 'TP.Hồ Chí Minh', 'Vinh', 'Đà Nẵng', 'Hải Phòng'
     ]
  }

}
