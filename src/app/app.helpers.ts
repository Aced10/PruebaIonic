import { Observable } from "rxjs/Observable";
import { TimeoutError } from "rxjs/Rx";

export function retry(error: Observable<any>): Observable<any> {
  let count = 0;
  return error.flatMap(error => {

    if (error instanceof TimeoutError) {
      return ++count >= 3 ? Observable.throw(getMessage(error)) : Observable.timer(count * 30000);

    } else {
      return Observable.throw(getMessage(error));

    }
  });
}

export function getMessage (error){

  let errorMessage = {};

  if(error._body){
    try{
      errorMessage = JSON.parse(error._body);

      if(error._body.status == '403'){
        localStorage.removeItem('LOCAL_TOKEN_KEY');
        return errorMessage;
      }else{
        return errorMessage;
      }

    }catch(err){
      errorMessage = {success:false, message:"Lo sentimos, se presentó un error al intentar procesar su solicitud."};
      return errorMessage;
    }
  }else{
    errorMessage = {success:false, message:"Lo sentimos, se presentó un error al intentar procesar su solicitud."};
    return errorMessage;
  }
}
