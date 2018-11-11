import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/services/api";
/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  vehicles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider) {
  }

  ionViewDidLoad() {
    this.provider.vehicles().subscribe(
      (response:any)=>{
        this.vehicles = response.results;
      },
      (error) => console.log(error)
    );
  }

}
