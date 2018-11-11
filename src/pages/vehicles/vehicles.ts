import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
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
  page: number = 1;
  noMore: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider, private modal: ModalController) {
  }

  ionViewDidLoad() {
    this.provider.vehicles(this.page).subscribe(
      (response:any)=>{
        this.vehicles = response.results;
      },
      (error) => console.log(error)
    );
  }

  doRefresh(refresher) {
    this.provider.vehicles(this.page).subscribe(
      (response:any)=>{
        this.vehicles = response.results;
        refresher.complete();
      },
      (error) => console.log(error)
    );
  }

  getMore(infiniteScroll) {

    this.page++;

    this.provider.vehicles(this.page).subscribe(
      (response:any)=>{
        if (response.next !== null) {
          this.vehicles = this.vehicles.concat(response.results);
          infiniteScroll.complete();
        } else {
          this.page--;
          this.noMore = true;
          infiniteScroll.complete();
        }
      },
      (error) => console.log(error)
    );
  }

  detailVehicle(i) {
    //this.films[i].characters[j] = !this.films[i].characters[j];
    let modalOptions: ModalOptions = {
      showBackdrop: false,
      enableBackdropDismiss: false
    };

    let dataVehicles = {
      name: this.vehicles[i].name,
      model: this.vehicles[i].model,
      manufacturer: this.vehicles[i].manufacturer,
      cost_in_credits: this.vehicles[i].cost_in_credits,
      length: this.vehicles[i].length,
      max_atmosphering_speed: this.vehicles[i].max_atmosphering_speed,
      passengers: this.vehicles[i].passengers,
      type: "Vehículos"
    };

    const modalVehicles = this.modal.create('ModalVehiclesPage', { data: dataVehicles }, modalOptions);
    modalVehicles.present();
  }

}
