import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController,ViewController } from 'ionic-angular';


/**
 * Generated class for the DrawerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'drawer',
  templateUrl: 'drawer.html'
})
export class DrawerComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm','5pm'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [10, 30, 40, 50, 90, 60, 100,90,30], label: 'Series A'},
    //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  lot_object : any;
  parking_number: string;
  capacity: number;
  spots_left: number;

  constructor(public viewCtrl: ViewController, public modalCtrl:ModalController,public navParams: NavParams) {
    console.log('Hello DrawerComponent Component');
    this.lot_object = this.navParams.data.value
    this.capacity = 52;
    this.spots_left = 20;
  }

  ngOnInit() {
    this.parking_number = this.lot_object['Parking Lot']
  }

  closeModal() {
    this.viewCtrl.dismiss({
      //value: null
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
