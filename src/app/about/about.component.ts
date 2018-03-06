import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  fullDescription: any[];
  mainTitle: string;
  linkSkillsTitle: string;

  constructor() {
    this.mainTitle = 'About me';
    this.linkSkillsTitle = 'See my skills';
    this.fullDescription = ['Lorem ipsum dolor sit amet. Nesciunt amet, nisi mollitia recusandae?', 'Libero illum sapiente quaerat cupiditate. Repudiandae natus, modi totam aut.', 'Veritatis iusto fuga omnis minus.', 'Ratione officia earum, fuga nulla.', 'Velit nobis rerum nesciunt in!'];
  }

  ngOnInit() {

  }

}
