webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 276;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Providers
//import { AuthProvider } from '../../providers/auth/auth';
// Pages
//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';


var TabsPage = /** @class */ (function () {
    //tab3Root = ContactPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
    }
    TabsPage.prototype.ionViewCanEnter = function () {
        //return this.auth.authenticated();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="List" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <leaflet-map></leaflet-map>\n</ion-content>\n'/*ion-inline-end:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingdataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ParkingdataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ParkingdataProvider = /** @class */ (function () {
    function ParkingdataProvider() {
        this.parkingLots = [
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
        ];
        console.log('Hello ParkingdataProvider Provider');
    }
    ParkingdataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParkingdataProvider);
    return ParkingdataProvider;
}());

//# sourceMappingURL=parkingdata.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DrawerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(viewCtrl, modalCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [10, 30, 40, 50, 90, 60, 100, 90, 30], label: 'Series A' },
        ];
        console.log('Hello DrawerComponent Component');
        this.lot_object = this.navParams.data.value;
        this.capacity = 52;
        this.spots_left = 20;
    }
    DrawerComponent.prototype.ngOnInit = function () {
        this.parking_number = this.lot_object['Parking Lot'];
    };
    DrawerComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss({
        //value: null
        });
    };
    // events
    DrawerComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DrawerComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'drawer',template:/*ion-inline-start:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/components/drawer/drawer.html"*/'<ion-content class="content">\n  <div>\n    <ion-toolbar color="bottom" (click)=\'closeModal()\'>\n      <h1>Parking Lot: {{parking_number}}</h1>\n    </ion-toolbar>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class="ion-float-left">\n          <div>\n            <h3>Capacity: {{capacity}}</h3>\n          </div>\n        </ion-col>\n        <ion-col class="ion-float-right">\n          <div>\n            <h3>Spots Left: {{spots_left}}</h3>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid padding=\'2.5%\'> \n      <h3>\n        <u>Parking Demand</u>\n      </h3>\n      <div style="display: block">\n        <canvas baseChart\n                [datasets]="barChartData"\n                [labels]="barChartLabels"\n                [options]="barChartOptions"\n                [legend]="barChartLegend"\n                [chartType]="barChartType"\n                (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)">\n        </canvas>\n      </div>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <h3>\n          <u>Transit Options:</u>\n        </h3>\n      </ion-row>\n      \n      <p>Lyft</p>\n      <p>Drive</p>\n      <p>Bike</p>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/components/drawer/drawer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DrawerComponent);
    return DrawerComponent;
}());

//# sourceMappingURL=drawer.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(344);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_parkingdata_parkingdata__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_leaflet_map_leaflet_map__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_drawer_drawer__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// App

// Native imports


// Providers
//import { ParseProvider } from '../providers/parse/parse';
//import { AuthProvider } from '../providers/auth/auth';

// Pages



// Components


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                //AboutPage,
                //ContactPage,
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                //SigninPage,
                //SignupPage,
                __WEBPACK_IMPORTED_MODULE_11__components_leaflet_map_leaflet_map__["a" /* LeafletMapComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_drawer_drawer__["a" /* DrawerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                //AboutPage,
                //ContactPage,
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_leaflet_map_leaflet_map__["a" /* LeafletMapComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_drawer_drawer__["a" /* DrawerComponent */]
                //SigninPage,
                //SignupPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                //ParseProvider,
                //AuthProvider,
                __WEBPACK_IMPORTED_MODULE_7__providers_parkingdata_parkingdata__["a" /* ParkingdataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 109,
	"./af.js": 109,
	"./ar": 110,
	"./ar-dz": 111,
	"./ar-dz.js": 111,
	"./ar-kw": 112,
	"./ar-kw.js": 112,
	"./ar-ly": 113,
	"./ar-ly.js": 113,
	"./ar-ma": 114,
	"./ar-ma.js": 114,
	"./ar-sa": 115,
	"./ar-sa.js": 115,
	"./ar-tn": 116,
	"./ar-tn.js": 116,
	"./ar.js": 110,
	"./az": 117,
	"./az.js": 117,
	"./be": 118,
	"./be.js": 118,
	"./bg": 119,
	"./bg.js": 119,
	"./bm": 120,
	"./bm.js": 120,
	"./bn": 121,
	"./bn.js": 121,
	"./bo": 122,
	"./bo.js": 122,
	"./br": 123,
	"./br.js": 123,
	"./bs": 124,
	"./bs.js": 124,
	"./ca": 125,
	"./ca.js": 125,
	"./cs": 126,
	"./cs.js": 126,
	"./cv": 127,
	"./cv.js": 127,
	"./cy": 128,
	"./cy.js": 128,
	"./da": 129,
	"./da.js": 129,
	"./de": 130,
	"./de-at": 131,
	"./de-at.js": 131,
	"./de-ch": 132,
	"./de-ch.js": 132,
	"./de.js": 130,
	"./dv": 133,
	"./dv.js": 133,
	"./el": 134,
	"./el.js": 134,
	"./en-SG": 135,
	"./en-SG.js": 135,
	"./en-au": 136,
	"./en-au.js": 136,
	"./en-ca": 137,
	"./en-ca.js": 137,
	"./en-gb": 138,
	"./en-gb.js": 138,
	"./en-ie": 139,
	"./en-ie.js": 139,
	"./en-il": 140,
	"./en-il.js": 140,
	"./en-nz": 141,
	"./en-nz.js": 141,
	"./eo": 142,
	"./eo.js": 142,
	"./es": 143,
	"./es-do": 144,
	"./es-do.js": 144,
	"./es-us": 145,
	"./es-us.js": 145,
	"./es.js": 143,
	"./et": 146,
	"./et.js": 146,
	"./eu": 147,
	"./eu.js": 147,
	"./fa": 148,
	"./fa.js": 148,
	"./fi": 149,
	"./fi.js": 149,
	"./fo": 150,
	"./fo.js": 150,
	"./fr": 151,
	"./fr-ca": 152,
	"./fr-ca.js": 152,
	"./fr-ch": 153,
	"./fr-ch.js": 153,
	"./fr.js": 151,
	"./fy": 154,
	"./fy.js": 154,
	"./ga": 155,
	"./ga.js": 155,
	"./gd": 156,
	"./gd.js": 156,
	"./gl": 157,
	"./gl.js": 157,
	"./gom-latn": 158,
	"./gom-latn.js": 158,
	"./gu": 159,
	"./gu.js": 159,
	"./he": 160,
	"./he.js": 160,
	"./hi": 161,
	"./hi.js": 161,
	"./hr": 162,
	"./hr.js": 162,
	"./hu": 163,
	"./hu.js": 163,
	"./hy-am": 164,
	"./hy-am.js": 164,
	"./id": 165,
	"./id.js": 165,
	"./is": 166,
	"./is.js": 166,
	"./it": 167,
	"./it-ch": 168,
	"./it-ch.js": 168,
	"./it.js": 167,
	"./ja": 169,
	"./ja.js": 169,
	"./jv": 170,
	"./jv.js": 170,
	"./ka": 171,
	"./ka.js": 171,
	"./kk": 172,
	"./kk.js": 172,
	"./km": 173,
	"./km.js": 173,
	"./kn": 174,
	"./kn.js": 174,
	"./ko": 175,
	"./ko.js": 175,
	"./ku": 176,
	"./ku.js": 176,
	"./ky": 177,
	"./ky.js": 177,
	"./lb": 178,
	"./lb.js": 178,
	"./lo": 179,
	"./lo.js": 179,
	"./lt": 180,
	"./lt.js": 180,
	"./lv": 181,
	"./lv.js": 181,
	"./me": 182,
	"./me.js": 182,
	"./mi": 183,
	"./mi.js": 183,
	"./mk": 184,
	"./mk.js": 184,
	"./ml": 185,
	"./ml.js": 185,
	"./mn": 186,
	"./mn.js": 186,
	"./mr": 187,
	"./mr.js": 187,
	"./ms": 188,
	"./ms-my": 189,
	"./ms-my.js": 189,
	"./ms.js": 188,
	"./mt": 190,
	"./mt.js": 190,
	"./my": 191,
	"./my.js": 191,
	"./nb": 192,
	"./nb.js": 192,
	"./ne": 193,
	"./ne.js": 193,
	"./nl": 194,
	"./nl-be": 195,
	"./nl-be.js": 195,
	"./nl.js": 194,
	"./nn": 196,
	"./nn.js": 196,
	"./pa-in": 197,
	"./pa-in.js": 197,
	"./pl": 198,
	"./pl.js": 198,
	"./pt": 199,
	"./pt-br": 200,
	"./pt-br.js": 200,
	"./pt.js": 199,
	"./ro": 201,
	"./ro.js": 201,
	"./ru": 202,
	"./ru.js": 202,
	"./sd": 203,
	"./sd.js": 203,
	"./se": 204,
	"./se.js": 204,
	"./si": 205,
	"./si.js": 205,
	"./sk": 206,
	"./sk.js": 206,
	"./sl": 207,
	"./sl.js": 207,
	"./sq": 208,
	"./sq.js": 208,
	"./sr": 209,
	"./sr-cyrl": 210,
	"./sr-cyrl.js": 210,
	"./sr.js": 209,
	"./ss": 211,
	"./ss.js": 211,
	"./sv": 212,
	"./sv.js": 212,
	"./sw": 213,
	"./sw.js": 213,
	"./ta": 214,
	"./ta.js": 214,
	"./te": 215,
	"./te.js": 215,
	"./tet": 216,
	"./tet.js": 216,
	"./tg": 217,
	"./tg.js": 217,
	"./th": 218,
	"./th.js": 218,
	"./tl-ph": 219,
	"./tl-ph.js": 219,
	"./tlh": 220,
	"./tlh.js": 220,
	"./tr": 221,
	"./tr.js": 221,
	"./tzl": 222,
	"./tzl.js": 222,
	"./tzm": 223,
	"./tzm-latn": 224,
	"./tzm-latn.js": 224,
	"./tzm.js": 223,
	"./ug-cn": 225,
	"./ug-cn.js": 225,
	"./uk": 226,
	"./uk.js": 226,
	"./ur": 227,
	"./ur.js": 227,
	"./uz": 228,
	"./uz-latn": 229,
	"./uz-latn.js": 229,
	"./uz.js": 228,
	"./vi": 230,
	"./vi.js": 230,
	"./x-pseudo": 231,
	"./x-pseudo.js": 231,
	"./yo": 232,
	"./yo.js": 232,
	"./zh-cn": 233,
	"./zh-cn.js": 233,
	"./zh-hk": 234,
	"./zh-hk.js": 234,
	"./zh-tw": 235,
	"./zh-tw.js": 235
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 349;

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Initial page

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: '<ion-nav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawer_drawer__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_parkingdata_parkingdata__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LeafletMapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LeafletMapComponent = /** @class */ (function () {
    function LeafletMapComponent(modalCtrl, parkSrvc) {
        this.modalCtrl = modalCtrl;
        this.parkSrvc = parkSrvc;
        console.log('Hello LeafletMapComponent Component');
    }
    LeafletMapComponent.prototype.ngOnInit = function () {
        this.center = [42.4606, -83.1346];
        this.leafletMap();
    };
    /*
    * Creates Map
    *
    *
    */
    LeafletMapComponent.prototype.leafletMap = function () {
        var _this = this;
        setTimeout(function () {
            var zoom = 16;
            _this.map = new __WEBPACK_IMPORTED_MODULE_2_leaflet__["Map"]('map').setView(_this.center, zoom);
            Object(__WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 30
            }).addTo(_this.map);
            _this.createMarker();
        }, 50);
        //this.map.on('click', (e)=>{this.onMapClick(e)});
    };
    /*
    * Creates Markers
    *
    *
    */
    LeafletMapComponent.prototype.createMarker = function () {
        //console.log(this.parkSrvc.parkingLots);
        var _this = this;
        var _loop_1 = function (i) {
            var lot = this_1.parkSrvc.parkingLots[i];
            Object(__WEBPACK_IMPORTED_MODULE_2_leaflet__["circle"])([lot.Latitutde, lot.Longitude], {
                color: 'green',
                //fillColor: '#f03',
                fillColor: 'green',
                fillOpacity: 0.5,
                radius: 10
            })
                .bindPopup(String(lot["Parking Lot"]))
                //.openPopup()
                .on('click', function () {
                //alert('Marker clicked');
                _this.presentModal(lot);
            })
                .addTo(this_1.map);
        };
        var this_1 = this;
        for (var i = 0; i < this.parkSrvc.parkingLots.length; i++) {
            _loop_1(i);
        }
        /*circleMarker(this.center).addTo(this.map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          //.openPopup()
          .on('click', () => {
            alert('Marker clicked');
          }); */
    };
    /*
    * Creates Drawer Component Modal
    *
    *
    */
    LeafletMapComponent.prototype.presentModal = function (lot) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(lot);
                        return [4 /*yield*/, this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__drawer_drawer__["a" /* DrawerComponent */], { value: lot })];
                    case 1:
                        modal = _a.sent();
                        //cssClass: 'my-custom-modal-css'
                        //return await modal.present();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b;
    LeafletMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'leaflet-map',template:/*ion-inline-start:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/components/leaflet-map/leaflet-map.html"*/'<div id="map" style="width:100%; height:100%;"></div>\n'/*ion-inline-end:"/Users/hopetambala/Documents/development/school/SI538_ferndale_park/ferndale_park_ionic3/src/components/leaflet-map/leaflet-map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_parkingdata_parkingdata__["a" /* ParkingdataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_parkingdata_parkingdata__["a" /* ParkingdataProvider */]) === "function" && _b || Object])
    ], LeafletMapComponent);
    return LeafletMapComponent;
}());

//# sourceMappingURL=leaflet-map.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.js.map