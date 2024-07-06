import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  SpectrumApiUrl = "";
  
  extractData(res: Response) {
    let body = res;
    return body || {};
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(private _http: HttpClient) {}

  userAuthentication(EmployeeId: string, password: string): Observable<any> {
    let userdata: any = { employeeId: EmployeeId, password: password };
    return this._http.post<any>(
      this.SpectrumApiUrl +
        '/UserCreation/Esignature?password=' +
        password +
        '&employeeId=' +
        EmployeeId,
      userdata
    );
  }
}
