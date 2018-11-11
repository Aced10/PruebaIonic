import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalVehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-vehicles',
  templateUrl: 'modal-vehicles.html',
})
export class ModalVehiclesPage {

  data: any;
  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    this.data = this.navParams.get('data');
  }

  closeModal() {
    this.view.dismiss();
  }
}
