import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environment';

@Injectable()
export class ErrorService {
    private canonicalName : string;
    constructor(private http: HttpClient) { 
    
    }

   
errorNumber='0'
errorMsg=''
    getDBMassage(id: string) {
        return this.http.get<any>(`${environment.appUrl}Message/get-db-message/` + id);
    }

    getAPMassage(id: string) {
        return this.http.get<any>(`${environment.appUrl}Message/` + id);
    }

   


   
}