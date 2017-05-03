import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertPage } from './alert-page';

@NgModule({
  declarations: [
    AlertPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertPage),
  ],
  exports: [
    AlertPage
  ]
})
export class AlertPageModule {}
