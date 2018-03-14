import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mainTitle: string;
  fullDescription: any[];
  linkMyWorkTitle: string;

  constructor() {
    this.mainTitle = 'Skills &<br>Experience';
    this.fullDescription = [
      'Developed fully functional responsive websites using HTML5, CSS3, JavaScript(jQuery) and PHP.',
      'Creating web application development using html5, css3, javascript, python(django) and google search engine',
      'Interested in popular web development technologies(Node.js, Angular 2/4/5)'
    ];
    this.linkMyWorkTitle = 'My work';
  }

  ngOnInit() {
  }

}
