import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider) {
  }

  ionViewDidLoad() {
    this.provider.starships().subscribe(
      (response:any)=>{
        this.starships = response.results;
      },
      (error) => console.log(error)
    );
  }

}
