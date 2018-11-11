import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { ApiProvider } from "../../providers/services/api";
/**
 * Generated class for the StarshipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  starships: any;
  page: number = 1;
  noMore: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider, private modal: ModalController) {

  }

  ionViewDidLoad() {
    this.provider.starships(this.page).subscribe(
      (response:any)=>{
        this.starships = response.results;
      },
      (error) => console.log(error)
    );
  }

  doRefresh(refresher) {
    this.provider.starships(this.page).subscribe(
      (response:any)=>{
        this.starships = response.results;
        refresher.complete();
      },
      (error) => console.log(error)
    );
  }

  getMore(infiniteScroll) {

    this.page++;
    this.provider.starships(this.page).subscribe(
      (response:any)=>{
        if (response.next !== null) {
          this.starships = this.starships.concat(response.results);
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

  detailStarship(i) {
    //this.films[i].characters[j] = !this.films[i].characters[j];
    let modalOptions: ModalOptions = {
      showBackdrop: false,
      enableBackdropDismiss: false
    };

    let dataStarships = {
      name: this.starships[i].name,
      model: this.starships[i].model,
      manufacturer: this.starships[i].manufacturer,
      cost_in_credits: this.starships[i].cost_in_credits,
      length: this.starships[i].length,
      max_atmosphering_speed: this.starships[i].max_atmosphering_speed,
      passengers: this.starships[i].passengers,
      type: "Naves Espaciales"
    };

    const modalStarships = this.modal.create('ModalVehiclesPage', { data: dataStarships }, modalOptions);
    modalStarships.present();
  }
}
