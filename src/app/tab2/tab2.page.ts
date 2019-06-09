import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Property } from '../models/index';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  properties: Array<Property>;


  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService

  ) {
    this.properties = this.propertyService.getAllProperties();

  }

  navToProperty(property: Property) {

    this.navCtrl
      .navigateForward("property-details", {
        queryParams: {
          q: "ionic",
          propertyName: property.name,
          propertyId: property.id
        }
      });
  }

  navToProfile() {
    this.navCtrl.navigateForward("tabs");
  }

}
