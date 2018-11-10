import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FilmsPage } from '../films/films';
import { StarshipsPage } from '../starships/starships';
import { VehiclesPage } from '../vehicles/vehicles';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmsPage;
  tab3Root = StarshipsPage;
  tab4Root = VehiclesPage;

  constructor() {

  }
}
