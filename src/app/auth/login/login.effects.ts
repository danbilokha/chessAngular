import {IAppState} from 'shared/interfaces/IAppState';
import {FireBaseService} from 'shared/services/firebase.service';
import * as actions from './login.action';
import {USERS} from 'assets/dbschema';

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as Rx from 'rxjs';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginEffect {

    @Effect()
    public getUsers$: Rx.Observable<any> = this.actions$
         .ofType(actions.FETCH_ALL_USERS)
         .switchMap(() => this.fireBaseService.getData(USERS))
         .map(users => new actions.fetchAllUsersSuccess(users))
         

    constructor(private store: Store<IAppState>,
        private actions$: Actions,
        private fireBaseService: FireBaseService) { }

}
