import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// App
import { MyApp } from './app.component';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';


// Providers
//import { ParseProvider } from '../providers/parse/parse';
//import { AuthProvider } from '../providers/auth/auth';
import { ParkingdataProvider } from '../providers/parkingdata/parkingdata';
import { GeolocationProvider} from '../providers/geolocation/geolocation'


// Pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';


// Components
import { LeafletMapComponent } from '../components/leaflet-map/leaflet-map'
import { DrawerComponent } from '../components/drawer/drawer';

@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    //ContactPage,
    HomePage,
    ListPage,
    TabsPage,
    //SigninPage,
    //SignupPage,
    LeafletMapComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    //ContactPage,
    HomePage,
    ListPage,
    TabsPage,
    LeafletMapComponent,
    DrawerComponent
    //SigninPage,
    //SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //ParseProvider,
    //AuthProvider,
    Geolocation,
    ParkingdataProvider,
    GeolocationProvider
    
  ]
})
export class AppModule { }
