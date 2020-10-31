import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as OffersActions from './offers.actions';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { OffersService } from './offers.service';
import { of } from 'rxjs';

@Injectable()
export class OffersEffects {
  constructor(private actions$: Actions, private offerService: OffersService) {}

  @Effect()
  listOffers$ = this.actions$.pipe(
    ofType(OffersActions.listOffers),
    tap((data) => console.log('effect', data)),
    mergeMap(() =>
      this.offerService.getJSON().pipe(
        map(
          (offers) => OffersActions.listOffersSuccess({ offers }),
          catchError((err) =>
            of(OffersActions.listOffersError({ payload: err }))
          )
        )
      )
    )
  );
}
