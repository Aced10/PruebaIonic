import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {ENV} from "../../config/config"
//import {Storage} from "@ionic/storage";

@Injectable()
export class ApiService {

  private baseUrl: string = ENV.API_ENDPOINT;

  constructor(private http: Http) {

  }

  films() {
    let url: string = this.baseUrl + '/films/';
    let data: any = this.http.get(url);
    console.log(data);
    return this.http.get(url);
  }

  people() {
    let url: string = this.baseUrl + '/people/';
    return this.http.get(url);
  }
}
