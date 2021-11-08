import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class SharedDataService {
    private usernameSource = new BehaviorSubject<string>('Vinay Singh');
    username = this.usernameSource.asObservable()

   
    constructor() { }

    changeUsername(username: string) {
        this.usernameSource.next(username)
    }


}