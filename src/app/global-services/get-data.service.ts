import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public data$ = new Observable((observer: Observer<string>) => {
    setTimeout(() => {
      /** .next() is a function, that brings a regular data package */
      observer.next('first package');
    }, 2000);
    setTimeout(() => {
      /** .next() is a function, that brings a regular data package */
      observer.next('second package');
    }, 4000);
    setTimeout(() => {
      /** .next() is a function, that brings a regular data package */
      observer.error('this does not work');
    }, 5000);
  });

  constructor(private http: HttpClient) { }

  public getData(p_jsonUrl: string): Observable<any> {
    return this.http.get(p_jsonUrl);
  }
}
