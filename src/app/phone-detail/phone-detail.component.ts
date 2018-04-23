import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhoneService } from '../phone.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {


// @Input decorator to make the phone property available for binding by the external PhoneListComponent.
  @Input() phone: Phone;

  constructor(
      private route: ActivatedRoute,
      private PhoneService: PhoneService,
      private location: Location) {}

  ngOnInit(): void {
    this.getPhone();
  }

getPhone(): void {
  const age = +this.route.snapshot.paramMap.get('age');
  this.PhoneService.getPhone(age)
   .subscribe(phone => this.phone = phone);
}

goBack(): void {
  this.location.back();
}

}
