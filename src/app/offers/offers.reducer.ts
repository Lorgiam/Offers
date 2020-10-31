import { createReducer, on, Action } from '@ngrx/store';
import { Offers } from './offers.interfaces';
import * as OffersActions from './offers.actions';

export interface OffersState {
  list: Offers[];
  loaded: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: OffersState = {
  list: [],
  loaded: false,
  loading: false,
  error: false,
};

const _offersReducer = createReducer(
  initialState,
  on(OffersActions.listOffers, (state) => ({
    ...state,
    loading: true,
  })),
  on(OffersActions.listOffersSuccess, (state, { offers }) => ({
    ...state,
    loading: false,
    loaded: true,
    list: offers,
  })),
  on(OffersActions.listOffersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: true,
  }))
);

export function offersReducer(state: OffersState, action: Action) {
  return _offersReducer(state, action);
}
