import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ParkingdataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ParkingdataProvider {
  parkingLots = 
  [
    {
      "Parking Lot": "1",
      "Latitutde": 42.4623525,
      "Longitude": -83.1369367
    },
    {
      "Parking Lot": "2",
      "Latitutde": 42.4618118,
      "Longitude": -83.1366088
    },
    {
      "Parking Lot": "3",
      "Latitutde": 42.4612505,
      "Longitude": -83.1376247
    },
    {
      "Parking Lot": "4",
      "Latitutde": 42.4602336,
      "Longitude": -83.138994
    },
    {
      "Parking Lot": "7",
      "Latitutde": 42.4597797,
      "Longitude": -83.1360697
    },
    {
      "Parking Lot": "8",
      "Latitutde": 42.459796,
      "Longitude": -83.1355064
    },
    {
      "Parking Lot": "9",
      "Latitutde": 42.4596594,
      "Longitude": -83.1326317
    },
    {
      "Parking Lot": "10",
      "Latitutde": 42.4602239,
      "Longitude": -83.1328787
    },
    {
      "Parking Lot": "11",
      "Latitutde": 42.4602545,
      "Longitude": -83.1316854
    },
    {
      "Parking Lot": "13",
      "Latitutde": 42.4608988,
      "Longitude": -83.1335019
    },
    {
      "Parking Lot": "15",
      "Latitutde": 42.4621464,
      "Longitude": -83.1343194
    }
   ]

  constructor() {
    console.log('Hello ParkingdataProvider Provider');
  }

}
