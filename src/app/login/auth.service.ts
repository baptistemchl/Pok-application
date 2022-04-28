import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
 
@Injectable()
export class AuthentificationService {
    // Vérifier si le client est connecte
    connected: boolean = false; 
    // Redirection
    redirectTo: any; 

    login(name: string, password: string): Observable<boolean> {
        let connected = (name === 'pikachu' && password === 'pikachu');
        return of(true).pipe(
            delay(100),
            tap(val => this.connected = connected)
        );
    }

    // Etat passe a false quand déconnexion
    logout(): void {
        this.connected = false;
    }
}
