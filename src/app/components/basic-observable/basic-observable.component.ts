import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import {filter, map, take, scan} from 'rxjs/operators';
import { GetDataService } from 'src/app/global-services/get-data.service';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.less']
})
export class BasicObservableComponent implements OnInit {

  private dataSubscription: Subscription;

  public dataFromServer = [];
  stream$: any

  constructor(private getDataService: GetDataService) {

   }

  ngOnInit() {
    this.dataSubscription = this.getDataService.getData('assets/data/cars.json')
    .subscribe(
      (data: string) => {
        this.stream$ = from(data).pipe(
          take(10),
          map(v => {
            this.dataFromServer.push(v);
            console.log(v);
          })
        )
      }
    );
  }

  btn():void {
    this.stream$.subscribe(arg => {});
  }

}
