import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppServiceService {
  constructor(private httpClient: HttpClient) {}
  data = 'test';
  getData(): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.httpClient.get(url);
  }
}
