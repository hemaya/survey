import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }


checkContact(email,caseno) {
  return this.http.get<any>(`${environment.appUrl}CMSQuest/${email}/${caseno}` );
}
add(data:any) {
  return this.http.post<any>(`${environment.appUrl}CMSQuest/`,data );
}

}
