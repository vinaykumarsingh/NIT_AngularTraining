import { Injectable } from '@angular/core';  
import { Router, CanActivate } from '@angular/router';  
@Injectable({ providedIn: 'root' })  


export class AuthGuard implements CanActivate { 

    constructor(private router: Router) { }
    
    canActivate() {
        debugger
        if (localStorage.getItem('currentUser')) {  
            return true;  
        }
        this.router.navigate(['']);  
        return false;  
    }  
} 