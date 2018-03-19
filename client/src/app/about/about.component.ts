import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  fullDescription: string;
  mainTitle: string;
  linkSkillsTitle: string;

  constructor() {
    this.mainTitle = 'About me';
    this.linkSkillsTitle = 'See my skills';
    this.fullDescription = 'An enthusiastic and self-motivated front/backend developer. I have two years of experience in HTML5, CSS3, Javascript(jQuery), PHP and Github. I am constantly eager to learn new technologies and languages (Node.js and Angular 2,4,5). I am currently seeking a front/backend development position.';
  }

  ngOnInit() {

  }

}
