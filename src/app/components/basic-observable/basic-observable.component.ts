import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, from, Observable } from 'rxjs';
import {filter, map, take, scan} from 'rxjs/operators';
import { GetDataService } from 'src/app/global-services/get-data.service';
import { ICarsData } from 'src/app/models/interfaces';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.less']
})
export class BasicObservableComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  private stream$: any;

  public dataFromServer = [];

  constructor(private getDataService: GetDataService) {

   }

  ngOnInit() {
    this.dataSubscription = this.getDataService.getCarsData$('assets/data/cars.json')
    .subscribe(
      (data: Array<ICarsData>) => {
        this.stream$ = from(data).pipe(
          take(100),
          filter((v: ICarsData) => v.name.substring(0, 1) === 'b'),
          map(v => this.dataFromServer.push(v))
        );
      }
    );
  }

  btn(): void {
    this.stream$.subscribe(arg => {});
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
