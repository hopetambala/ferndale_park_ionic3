import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  options: GeolocationOptions;

  coordinates = {
    latitude : null,
    longitude: null
  }

  constructor(private geolocation:Geolocation,private plt:Platform) {
    console.log('Hello GeolocationProvider Provider');
  }

   /**
  * Returns User Position Coordinates
  * 
  * @example
  * getUserPosition()
  * 
  * @returns latitude and longitude coordinates
  */
  async getUserPosition() {
    this.options = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0
    };
    
    await this.plt.ready();
      
    //return await this.geolocation.getCurrentPosition(this.options)
    return this.geolocation.getCurrentPosition(this.options).then((resp)=>{
      return [resp.coords.latitude,resp.coords.longitude]
    })
  }

}
