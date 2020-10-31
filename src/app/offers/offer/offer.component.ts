import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import * as OffersActions from '../offers.actions';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  offers: any[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(OffersActions.listOffers());
    this.store.select('offers').subscribe((data) => {
      if (data.list.length != 0) {
        const [versions] = data.list;
        const { versions: list } = versions;
        list.map((el) => {
          this.offers.push({
            label: el.name,
            value: el.id,
          });
        });
      }
    });
  }
}
