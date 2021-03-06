import {TestScheduler, Scheduler} from 'rxjs/Rx';
import {Action} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {TestMessage} from 'rxjs/testing/TestMessage';
import {expect} from 'karma-jasmine';

function take({frame, notification: {kind, value, hasValue, error}}: any) {
    let _errorFix: any;
    return {
        frame, notification: {kind, value, hasValue, error: _errorFix}
    };
}

function testScheduler(): TestScheduler {
    new Observable<any>(); // tslint:disable-line:no-unused-expression // need it to import all Observable methods from rxjs

    return new TestScheduler((a: TestMessage[], b: TestMessage[]) => {
        let _a = a.map(take);
        let _b = b.map(take);

        expect(_a)
            .toEqual(_b);
    });
}

function createMarble(variable: any = {}) {
    return `-${Object.keys(variable).join('-')}-`;
}

export {take, testScheduler, createMarble};
