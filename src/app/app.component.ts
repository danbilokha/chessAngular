import {Component} from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
}

export function retry<T>(
  count: number,
  wait: number
): (source: Rx.Observable<T>) => Rx.Observable<T> {

  return (source: Rx.Observable<T>) => source
    .retryWhen(errors => errors
      // Each time an error occurs, increment the accumulator.
      // When the maximum number of retries have been attempted, throw the error.
      .scan((acc, error) => {
        if (acc >= count) { throw error; }
        return acc + 1;
      }, 0)
      // Wait the specified number of milliseconds between retries.
      .delay(wait)
    );
}