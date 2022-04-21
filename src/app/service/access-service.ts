import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AccessService {

    httpOptions: any;

    constructor(
        private http: HttpClient,
    ) { }

    post(api: any, parameter: any, body: any): Observable<any> {
        this.httpOptions = {
            headers: new HttpHeaders({
                Accept: 'application/json',
            })
        };
        return this.http.post(api + parameter, body, this.httpOptions).pipe(
            tap(
                response => {
                    console.log('POST call data status fail', response);
                },
                error => this.handleError(error)
            )
        );
    }

    get(api: any, parameter: any): Observable<any> {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(api + parameter, this.httpOptions).pipe(
            tap(
                response => {
                    console.log('GET call data status fail', response);
                },
                error => this.handleError(error)
            )
        );
    }

    private handleError(error: any) {
        console.error('An error occurred', error); //  for demo purposes only
        return throwError(error || 'Server Error');
    }
}