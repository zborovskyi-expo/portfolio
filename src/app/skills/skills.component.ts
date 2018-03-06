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
    this.fullDescription = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis totam laboriosam unde, voluptates et quaerat laudantium explicabo hic deleniti sunt, fuga facilis placeat quidem, vel!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam molestiae doloremque voluptatem, a nesciunt!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'];
    this.linkMyWorkTitle = 'My work';
  }

  ngOnInit() {
  }

}
