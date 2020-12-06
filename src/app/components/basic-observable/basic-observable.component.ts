import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetDataService } from 'src/app/global-services/get-data.service';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.less']
})
export class BasicObservableComponent implements OnInit {

  private dataSubscription: Subscription;

  public dataFromServer: any;

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.dataSubscription = this.getDataService.getData('assets/data/cars.json').subscribe(
      (data: string) => {
        this.dataFromServer = data;
      }
    );
  }

}
