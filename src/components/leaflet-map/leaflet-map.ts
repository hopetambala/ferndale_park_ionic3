import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { NavParams, ModalController } from 'ionic-angular';

import { Map, latLng, tileLayer, Layer, marker, circleMarker,circle } from 'leaflet';

import { DrawerComponent } from '../drawer/drawer';
import { ParkingdataProvider } from '../../providers/parkingdata/parkingdata';
/**
 * Generated class for the LeafletMapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'leaflet-map',
  templateUrl: 'leaflet-map.html'
})
export class LeafletMapComponent {

  center: any;
  map: Map<'map', {
    center: [51.505, -0.09],
    zoom: 13}>;

  constructor(public modalCtrl:ModalController, private parkSrvc:ParkingdataProvider) {
    console.log('Hello LeafletMapComponent Component');
  }

  ngOnInit() {
    this.center = [42.4606, -83.1346];
    this.leafletMap();
  }

    /*
    * Creates Map
    *
    * 
    */
  leafletMap(){
    setTimeout(() => {
      var zoom = 16
      this.map = new Map('map').setView(this.center, zoom);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 30
    }).addTo(this.map);
      this.createMarker()
    }, 50);

    //this.map.on('click', (e)=>{this.onMapClick(e)});
  }

  /*
  * Creates Markers
  *
  * 
  */
  createMarker(){
    //console.log(this.parkSrvc.parkingLots);

    for (let i=0;i < this.parkSrvc.parkingLots.length;i++){
      let lot = this.parkSrvc.parkingLots[i]
      circle([lot.Latitutde,lot.Longitude],{
        color: 'green',
        //fillColor: '#f03',
        fillColor:'green',
        fillOpacity: 0.5,
        radius: 10
      })
      //.bindPopup(String(lot["Parking Lot"]))
      //.openPopup()
      .on('click', () => {
        //alert('Marker clicked');
        this.presentModal(lot)
      })
      .addTo(this.map)
      ;

    }
    /*circleMarker(this.center).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      //.openPopup()
      .on('click', () => {
        alert('Marker clicked');
      }); */

  }

  /*
  * Creates Drawer Component Modal
  *
  * 
  */
  async presentModal(lot) {
    console.log(lot)
    let modal = await this.modalCtrl.create(DrawerComponent,{ value: lot });
      //cssClass: 'my-custom-modal-css'
    //return await modal.present();
    modal.present();
  }

}
