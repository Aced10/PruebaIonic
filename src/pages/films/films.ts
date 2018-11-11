import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ApiProvider, private modal: ModalController) {}

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
    let modalOptions: ModalOptions = {
      showBackdrop: false,
      enableBackdropDismiss: false
    };

    let dataCharacter = {
      name: this.films[i].characters[j].name,
      height: this.films[i].characters[j].height,
      mass: this.films[i].characters[j].mass,
      hair_color: this.films[i].characters[j].hair_color,
      skin_color: this.films[i].characters[j].skin_color,
      eye_color: this.films[i].characters[j].eye_color,
      birth_year: this.films[i].characters[j].birth_year,
      gender: this.films[i].characters[j].gender
    };

    const modalCharacter = this.modal.create('DetailModalPage', { data: dataCharacter }, modalOptions);
    modalCharacter.present();
  }
}

