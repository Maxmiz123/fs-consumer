import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ) {}
    
  navToSaved() {
    this.navCtrl.navigateForward('tabs/tab2');
  }

}
