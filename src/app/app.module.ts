import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneService } from './phone.service';
import { AppRoutingModule } from './/app-routing.module';
import { PhoneSearchComponent } from './phone-search/phone-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    PhoneSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< b1fda2a4b8362c15be2c4ef0ee2c9f2ac96f0ab6


=======
    
    
>>>>>>> Add HTTP Service and Search option
    // The HttpClientInMemoryWebApiModule module intercepts HTTP request
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, { dataEncapsulation: false }
<<<<<<< b1fda2a4b8362c15be2c4ef0ee2c9f2ac96f0ab6
  )
=======
      )
>>>>>>> Add HTTP Service and Search option
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
