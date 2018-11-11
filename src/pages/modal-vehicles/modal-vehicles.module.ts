import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalVehiclesPage } from './modal-vehicles';

@NgModule({
  declarations: [
    ModalVehiclesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalVehiclesPage),
  ],
})
export class ModalVehiclesPageModule {}
