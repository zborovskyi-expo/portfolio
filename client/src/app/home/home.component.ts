import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainTitle: string;
  subTitle: string;
  linkMyWorkTitle: string;
  linkContactTitle: string;

  constructor() {
    this.mainTitle = 'Hi,<br>I am Bohdan,<br>web developer.';
    this.subTitle = 'Front End Developer / Back End Developer';
    this.linkMyWorkTitle = 'See My Work';
    this.linkContactTitle = 'Contact Me';
  }

  ngOnInit() {
  }

}
