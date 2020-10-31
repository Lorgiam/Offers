import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OffersService } from './offers.service';
import { StoreModule } from '@ngrx/store';
import { offersReducer } from './offers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OffersEffects } from './offers.effects';
import { OfferComponent } from './offer/offer.component';
import { PricesComponent } from './prices/prices.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
@NgModule({
  declarations: [OfferComponent, PricesComponent, CharacteristicsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OffersRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('offers', offersReducer),
    EffectsModule.forFeature([OffersEffects]),
  ],
  providers: [OffersService],
})
export class OffersModule {}
