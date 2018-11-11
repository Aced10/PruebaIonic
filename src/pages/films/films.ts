import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/services/api";

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  films: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider) {  }

  ionViewDidLoad() {
    this.provider.films().subscribe(
      (response:any)=>{
        this.films = response.results;
      },
      (error) => console.log(error)
    );
  }

}
