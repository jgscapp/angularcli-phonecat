import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PHONES } from '../phones';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  // phone : Phone = {
  //   age: 0,
  //   id: "motorola-xoom-with-wi-fi",
  //   imageUrl: "img/phones/motorola-xoom-with-wi-fi.0.jpg",
  //   name: "Motorola XOOM\u2122 with Wi-Fi",
  //   snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
  // };

  phones = PHONES;

  selectedPhone : Phone;


  constructor() { }

  ngOnInit() {
  }

  onSelect(phone: Phone): void {
      this.selectedPhone = phone;
}

}
