import { Component, OnInit } from '@angular/core';

class Service {
  name: string;
  description: string;
  imageUrl: string;

  public constructor(name: string, description: string, imageUrl: string) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor() { }

  ngOnInit(): void {
    let service1 = new Service("Consulting", "Get top tier industry consulting on how to design your website, app, or infrastructure", "https://images.unsplash.com/photo-1671032018772-bdaf275806ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    let service2 = new Service("App", "Bring your app idea to life, and put it into the hands of users on all devices", "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    let service3 = new Service("Web", "Every business needs a web presence in the information age. Have us build your web presence with features like ecommerce, news letters, and many more.", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3ludGh3YXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    let service4 = new Service("Infrastructure", "Petabytes of data? Millions of users? No problem! Have our industry experts stand up robust infrastructure for your next big idea.", "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");

    this.services.push(service1);
    this.services.push(service2);
    this.services.push(service3);
    this.services.push(service4);
  }

}
