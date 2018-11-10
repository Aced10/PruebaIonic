import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

  public static APP_NAME = 'StarWars';

  public static defaultMessage = {
    //Error en el submission
    "error": "Lo sentimos, se presentó un error al intentar enviar su petición. Por favor inténtalo nuevamente.",
    //No se recibe ningun dato de respuesta
    "noResponse": "Lo sentimos, no se obtuvo respuesta por parte del servidor. Por favor inténtalo nuevamente.",
    //Se recibe una respuesta que no contiene la información solicitada
    "wrongAnswer": "Lo sentimos, no se obtuvo una respuesta adecuada por parte del servidor. Por favor inténtalo nuevamente.",
    //Se recibe una respuesta que no contiene la información solicitada
    "noConnection": "Lo sentimos, en este momento el servidor no se encuentra disponible, por favor inténtalo mas tarde.",
    "activeSession": "La sesión ya fue finalizada.",
    "paynetError": "Lo sentimos, se ha perdido la conexión con el servidor de paynet. Por favor inténtalo mas tarde.",
    "paynetErrorPricing": "Lo sentimos, se ha perdido la conexión con el servidor de paynet. Por favor inténta consultar las tarifas mas tarde.",
    "paynetErrorPayment": "Lo sentimos, se ha perdido la conexión con el servidor de paynet. Por favor intente consultar sus pagos mas tarde.",
    "sessionExpired": "Su sesión ha caducado. Por favor inicie nuevamente."
  };

}
