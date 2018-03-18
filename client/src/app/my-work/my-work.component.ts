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
      { title: 'Stock Charts App', link: 'https://stock-charts-app.herokuapp.com', tags: 'Node.js, Express, Angular 5' },
      { title: 'Bcweb.pl', link: 'http://bcweb.pl', tags: 'Php, Html5, Css3, JQuery, Quick.CMS' },
      { title: 'Krulen', link: 'http://krulen.com.pl', tags: 'Php, Html5, Css3, JQuery, Quick.CMS' },
      { title: 'Proud', link: 'http://proud-fitness.com', tags: 'Php, Html5, Css3, JQuery, Craft.CMS' },
      { title: 'Valdi Katalizatory', link: 'http://katalizatory.org', tags: 'Php, Html5, Css3, JQuery, Quick.CMS, Vue.js' },
      { title: 'SOWL', link: 'http://sowlofficial.com', tags: 'Php, Html5, Css3, JQuery, Quick.Cart' },
      { title: 'Bramy A', link: 'https://bramy-aga.pl', tags: 'Php, Html5, Css3, JQuery, Quick.CMS' },
      { title: 'Mmimport', link: 'http://mmimport.pl', tags: 'Php, Html5, Css3, JQuery, Craft.CMS' }
    ];
    this.linkContact = 'Contact Me';

  }

  ngOnInit() {
  }

}
