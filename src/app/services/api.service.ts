import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private protocol = 'https://';
  private database = `angular-class-bca1e.firebaseio`;
  private domain = '.com/';
  constructor(private http: HttpClient) {
  }

  private baseUrl() {
    return this.protocol + this.database + this.domain;
  }
  public get(url: string) {
    return this.http.get(this.baseUrl() + url);
  }
  public post(url: string, body: any) {
    return this.http.post(this.baseUrl() + url, body);
  }
}
