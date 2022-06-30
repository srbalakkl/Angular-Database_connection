import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    private httpHeader = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*');

    constructor(private httpClientService: HttpClient) {
    }

    register(data: any) {
        //check the post() method by replacing it with put() method.
        return this.httpClientService.post<any>(environment.apiUrl,
            data, {headers: this.httpHeader, params: new HttpParams().set('register', true)});
    }

}
