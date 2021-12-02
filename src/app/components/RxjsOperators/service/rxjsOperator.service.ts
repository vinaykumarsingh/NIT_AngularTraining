import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, ReplaySubject } from 'rxjs';
import { merge } from 'rxjs';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class RxjsOperatorService {
  apiEndPoint = 'https://jsonplaceholder.typicode.com/users';
  source: Observable<any>;
  replaySubject = new ReplaySubject(3);



  constructor(private http: HttpClient) { }

  // Normal Flow
  // getUsers() {
  //   this.source = this.http.get(this.apiEndPoint)
  //   console.log('this.source==>', this.source)
  // }

  // Subject Example
  // private usernameSource = new Subject<any>();
  // userNamesInService = this.usernameSource.asObservable()
  // getUsers() {
  //   this.userNamesInService = this.http.get(this.apiEndPoint)
  //   console.log('this.source==>', this.source)
  // }


  //// Behaviour Subject Example

  // sourceTemp = new BehaviorSubject<any>([{ name: 'vinay' }]);
  // source2 = this.sourceTemp.asObservable();

  // getUsers() {
  //   this.http.get(this.apiEndPoint).subscribe(data => {
  //     this.sourceTemp.next(data)
  //   })


  // //   // Replay Subject
  //   this.replaySubject.next(1);
  //   this.replaySubject.next(2);
  //   this.replaySubject.next(3);
  //   this.replaySubject.next(4);

  // }


  //// Merge
  // source2: Observable<any>;
  // source3: Observable<any>;
  // sourceMerged: Observable<any>;

  // getUsers() {
  //   this.source2 = this.http.get(this.apiEndPoint)
  // }

  // getPosts() {
  //   this.source3 = this.http.get('https://jsonplaceholder.typicode.com/posts')
  //   this.sourceMerged = merge(this.source2, this.source3);
  // }



  //// Of Operatot
  // sourceUsingOfOperator: Observable<any>;

  // getUsers() {
  //   this.sourceUsingOfOperator = of(1, 2, 3)
  // }


  //// MAP Operator

  // sourceUsingOfandMapOperator: Observable<any>;
  // getUsers() {
  //   this.sourceUsingOfandMapOperator = of(1, 2, 3).pipe(map(data => data * 10))
  // }


  //// Filtrer Operator

  // sourceUsingOfandFilterOperator: Observable<any>;
  // getUsers() {
  //   this.sourceUsingOfandFilterOperator = of(1, 2, 3, 4, 5, 6).pipe(filter(n=>n % 2 ==0))
  // }


  ////Tap Operator
  sourceUsingOfandTapOperator: Observable<any>;
  getUsers() {
    this.sourceUsingOfandTapOperator = of(1, 2, 3, 4, 5).pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`))
    );
  }



}