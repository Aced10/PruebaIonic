import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ENV} from "../../config/config";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private baseUrl: string = ENV.API_ENDPOINT;

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  films() {
    let url: string = this.baseUrl + '/films/';
    return this.http.get(url);
  }

  people() {
    let url: string = this.baseUrl + '/people/';
    return this.http.get(url);
  }

  starships() {
    let url: string = this.baseUrl + '/starships/';
    return this.http.get(url);
  }

  vehicles() {
    let url: string = this.baseUrl + '/vehicles/';
    return this.http.get(url);
  }
}
