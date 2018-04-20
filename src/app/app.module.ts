import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneService } from './phone.service';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
