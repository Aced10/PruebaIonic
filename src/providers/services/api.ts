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

  }

  films() {
    let url: string = this.baseUrl + '/films/';
    return this.http.get(url);
  }

  people(id: number) {
    let url: string = this.baseUrl + '/people/'+id;
    return this.http.get(url);
  }

  starships(page: number) {
    let url: string = this.baseUrl + '/starships/?page='+page;
    return this.http.get(url);
  }

  vehicles(page: number) {
    let url: string = this.baseUrl + '/vehicles/?page='+page;
    return this.http.get(url);
  }
}
