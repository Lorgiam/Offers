import { ActionReducerMap } from '@ngrx/store';
import { Offers } from './offers/offers.interfaces';
import { offersReducer, OffersState } from './offers/offers.reducer';

export interface AppState {
  offers: OffersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  offers: offersReducer,
};
