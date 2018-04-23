import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Phone } from './phone';
import { PHONES } from './phones';


@Injectable()
export class PhoneService {

  constructor() { }


getPhones(): Observable<Phone[]> {
  return of(PHONES);
}

getPhone(age: number): Observable<Phone> {
  return of(PHONES.find(phone => phone.age === age));
}

}
