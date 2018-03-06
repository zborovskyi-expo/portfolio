import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mainTitle: string;
  fullDescription: string;

  name: string;
  email: string;
  phone: string;
  message: string;
  endpoint: string;

  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.mainTitle = 'Contact me';
    this.fullDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ullam repellendus atque facilis eligendi voluptatibus.';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
    this.endpoint = 'send.php';
  }

  ngOnInit() {
  }

  sendForm() {
    let postVars = {
      email: this.email,
      name: this.name,
      phone: this.phone,
      message: this.message
    };

    this.http.post(this.endpoint, postVars)
      .subscribe(response => console.log(response), response => console.log(response));

  }

}
