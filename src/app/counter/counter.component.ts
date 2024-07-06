import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { decrement, increment, reset } from '../states/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
  }

  dispatchIncrement() {
    this.store.dispatch(increment());
  }

  dispatchDecrement() {
    this.store.dispatch(decrement());
  }

  dispatchReset() {
    this.store.dispatch(reset());
  }

}
