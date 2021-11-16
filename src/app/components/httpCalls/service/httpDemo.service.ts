import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
    providedIn: 'root'
})

export class HttpDemoService {
    // private usernameSource = new BehaviorSubject<string>('Vinay Singh');
    // username = this.usernameSource.asObservable()

    apiEndPoints = 'https://jsonplaceholder.typicode.com/users'

   
    constructor(private httpClient: HttpClient) { }


    getHttpData(): Observable<any>  {
        console.log('Service methoad call exicuted!!')
        return this.httpClient.get(this.apiEndPoints)
    }

    postHttpData(): Observable<any>  {
        let tempObj = {
            "id": 11,
            "name": "Test Name",
            "username": "Test username",
          }

        return this.httpClient.post(this.apiEndPoints, tempObj)
    }


}