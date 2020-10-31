import { createAction, props } from '@ngrx/store';
import { Offers } from './offers.interfaces';

export const listOffers = createAction('[OFFERS] List Offers');
export const listOffersSuccess = createAction(
  '[OFFERS] List Offers Success',
  props<{ offers: Offers[] }>()
);
export const listOffersError = createAction(
  '[OFFERS] List Offers Error',
  props<{ payload: any }>()
);
