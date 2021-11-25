import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from '../../../../environments/environment'


@Injectable({
    providedIn: 'root'
})

export class HttpDemoService {
    // private usernameSource = new BehaviorSubject<string>('Vinay Singh');
    // username = this.usernameSource.asObservable()

    // apiEndPoints = 'https://jsonplaceholder.typicode.com/users'

    apiEndPoints = environment.userListUrl
    constructor(private httpClient: HttpClient) { }


    getHttpData(): Observable<any> {
        console.log('Service methoad call exicuted!!')
        return this.httpClient.get(this.apiEndPoints).pipe(
            catchError(this.handleError)

        )
    }

    postHttpData(): Observable<any> {
        let tempObj = {
            "id": 11,
            "name": "Test Name",
            "username": "Test username",
        }

        return this.httpClient.post(this.apiEndPoints, tempObj)
    }

    handleError(error: HttpErrorResponse) {
        debugger;
        console.log("lalalalalalalala");
        console.log('error handled in servise ===>', error)
        
        return throwError(error);
    }


}