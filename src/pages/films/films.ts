import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  films: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider) {  }

  ionViewDidLoad() {

    let regex = /(\d+)/g;


    this.provider.films().subscribe(
      (response:any)=>{
        let result = response.results.map(film =>  {
          let auxCharacters = [];
          film.characters.map(people => {
            let id = people.toString().match(regex);

            this.provider.people(id).subscribe(
              (character:any)=>{
                auxCharacters.push(character);
              },
              (error) => console.log(error)
            );
          });
          let mapFilm = {
            title: film.title,
            characters: auxCharacters,
            open: false
          };
          return mapFilm;
        });

        this.films = result;
      },
      (error) => console.log(error)
    );
  }

  toggleSection(i) {
    this.films[i].open = !this.films[i].open;
  }

  detailCharacter(i, j) {
    //this.films[i].characters[j] = !this.films[i].characters[j];
  }
}

