import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  url = "https://64f968334098a7f2fc145233.mockapi.io/"

  fatchapi(type: any) {
    return this.http.get(this.url + type)
  }
  fatchapiset(type: any, id: any) {
    return this.http.get(this.url + type + '/' + id)
  }
  fatchapiid(type: any, data: any) {
    return this.http.post(this.url + type, data)
  }
  fatchapidlt(type: any, id: any) {
    return this.http.delete(this.url + type + '/' + id)
  }
  fatchapiupdate(type: any, id: any, data: any) {
    return this.http.put(this.url + type + '/' + id, data)
  }
}
