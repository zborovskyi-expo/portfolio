import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  mainTitle: string;
  workList: any[];
  linkContact: string;

  constructor() {
    this.mainTitle = 'My Work';
    this.workList = [
      { title: 'Stock Charts App', link: 'https://stock-charts-app.herokuapp.com', tags: 'Node.js, Express, Angular 5', icon: '/assets/icon.svg' },
      { title: 'Bcweb.pl', link: 'http://bcweb.pl', tags: 'Php, Html5, Css3, Quick.CMS', icon: '/templates/default/img/facebook_image.png' },
      { title: 'Krulen', link: 'http://krulen.com.pl', tags: 'Php, Html5, Css3, Quick.CMS', icon: '/templates/default/img/opengraph.png' },
      { title: 'Proud', link: 'http://proud-fitness.com', tags: 'Php, Html5, Css3, Craft.CMS', icon: '/upload/opengraph.png' },
    ];
    this.linkContact = 'Contact Me';

  }

  ngOnInit() {
  }

}
