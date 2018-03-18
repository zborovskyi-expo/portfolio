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


  emailLink: string;
  phoneLink: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  nameError: boolean;
  emailError: boolean;
  phoneError: boolean;
  messageError: boolean;
  endpoint: string;

  formReturnStatus: boolean;
  formReturnText: string;

  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.mainTitle = 'Contact me';
    this.emailLink = 'bohdan.zborovskyi@gmail.com';
    this.phoneLink = '+48 724 678 579';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
    this.nameError = false;
    this.emailError = false;
    this.phoneError = false;
    this.messageError = false;
    this.endpoint = 'send-email';
    this.formReturnStatus = false;
    this.formReturnText = 'Message was sent';
  }

  ngOnInit() {
  }

  isValidEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onSubmit() {
    let isValid = true

    let params = {
      email: this.email,
      name: this.name,
      phone: this.phone,
      message: this.message
    }

    if(this.name==''){
      isValid = false
      this.nameError = true
      let self = this
      setTimeout(function(){
        self.nameError = false
      }, 1000);
    }

    if(!this.isValidEmail(this.email)){
      isValid = false
      this.emailError = true
      let self = this
      setTimeout(function(){
        self.emailError = false
      }, 1000);
    }

    if(this.phone==''){
      isValid = false
      this.phoneError = true
      let self = this
      setTimeout(function(){
        self.phoneError = false
      }, 1000);
    }

    if(this.message==''){
      isValid = false
      this.messageError = true
      let self = this
      setTimeout(function(){
        self.messageError = false
      }, 1000);
    }

    if(isValid){
      let self = this
      this.http.post(this.endpoint, { responseType: 'json', params: params, headers: { 'Content-Type': 'application/json' } })
        .subscribe(response => {
          console.log('success')
          console.log(response)
          self.formReturnText = 'Your message has been sent successfully. '
          self.formReturnStatus = true
          setTimeout(function(){
            self.formReturnStatus = false
            self.name = ''
            self.email = ''
            self.phone = ''
            self.message = ''
          }, 2500)
        }, response => {
          console.log('error')
          console.log(response)
          self.formReturnText = 'Your message has not been sent. Try again later'
          self.formReturnStatus = true
          setTimeout(function(){
            self.formReturnStatus = false
            self.name = ''
            self.email = ''
            self.phone = ''
            self.message = ''
          }, 2500)
        });

    }
    else
      console.log('is not valid')

  }

}
