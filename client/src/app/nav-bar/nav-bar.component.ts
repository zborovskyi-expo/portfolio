import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  link_fb: string;
  link_in: string;

  constructor() {
    this.link_fb = 'https://www.facebook.com/bohdan.zborovskiy';
    this.link_in = 'https://www.linkedin.com/in/bohdan-zborovskyi-74b25710b/';
  }

  ngOnInit() {
  }

}
