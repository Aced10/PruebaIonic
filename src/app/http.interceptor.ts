import { Storage } from '@ionic/storage';
import {Http, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Constants} from "../providers/constants";
import * as connection from '../app/app.helpers';

export class HttpInterceptor extends Http {

  version: string;

  constructor(connectionBackend: ConnectionBackend, requestOptions: RequestOptions) {
    super(connectionBackend, requestOptions);
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
      return Observable.create(observer => {
        super.get(url, options)
          .timeout(5000)
          .retryWhen((error) => {return connection.retry(error);})
          .map(res=>res.json())
          .subscribe(data => {
            observer.next(data);
            observer.complete();
          }, err => {
            try{
              observer.next(err.json());
            }catch(e){
              observer.next(err);
            }
            observer.complete();
          });
      })
    });
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {

    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options)=>{
      return Observable.create(observer => {
        super.post(url, body, options)
          .timeout(5000)
          .retryWhen((error) => {return connection.retry(error);})
          .map(res=>res.json())
          .subscribe(data => {
            observer.next(data);
            observer.complete();
          }, err => {
            try{
              observer.next(err.json());
            }catch(e){
              observer.next(err);
            }
            observer.complete();
          });
      })
    });

    /*return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
      return super.post(url, body, options)
    })*/
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
      return super.put(url, body, options)
    })
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
      return super.delete(url, options)
    });
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs) {
    return this.storage.get('token').then(async (token) => {
      if (options == null) {
        options = new RequestOptions();
      }

      if (options.headers == null) {
        options.headers = new Headers();
      }

      if (token !== null) {
        options.headers.append('Authorization', 'Bearer ' + token);
      }
      options.headers.append('Content-Type', 'application/json');
      options.headers.append('X-App', Constants.APP_NAME);

      if(!this.version){
        this.version = await this.appInfo.getVersionNumber();
      }
      options.headers.append('Client', this.version);

      return options;
    });
  }
}
