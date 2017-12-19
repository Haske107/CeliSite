webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/Assets/Ally-Side.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Ally-Side.1bbcde034cf7ebfe3d4f.jpg";

/***/ }),

/***/ "../../../../../src/Assets/COS.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "COS.875bbebf053a1c899b66.png";

/***/ }),

/***/ "../../../../../src/Assets/Carmen.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Carmen.e1bdf553b6d0fc75969b.png";

/***/ }),

/***/ "../../../../../src/Assets/Gamberger.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Gamberger.d5123369484c3b60b2e3.png";

/***/ }),

/***/ "../../../../../src/Assets/Pasajeros.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pasajeros.0ed5031efb35bf4692be.jpg";

/***/ }),

/***/ "../../../../../src/Assets/Sol.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Sol.5604ee563c609b3574a0.png";

/***/ }),

/***/ "../../../../../src/Imgs/Faceless_God_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Faceless_God_1.0ebef3f19746328c5e15.jpg";

/***/ }),

/***/ "../../../../../src/Imgs/La_Gata_1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "La_Gata_1.03a2962b5f331d0df8df.png";

/***/ }),

/***/ "../../../../../src/Imgs/the_Night_Bell_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "the_Night_Bell_1.92e74e0bdec53bbf9227.jpg";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet   {\n    width: 100%;\n    height: 100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__itempage_itempage_component__ = __webpack_require__("../../../../../src/app/itempage/itempage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_dialog_info_dialog_component__ = __webpack_require__("../../../../../src/app/info-dialog/info-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__itempage_itempage_component__["a" /* ItempageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__info_dialog_info_dialog_component__["a" /* InfoDialogComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* AppRouter */], __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatSidenavModule */]
        ],
        entryComponents: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");


var APP_ROUTES = [
    // Home Page Routes
    { path: '', redirectTo: '/Landing', pathMatch: 'full' },
    { path: 'Landing', component: __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__["a" /* LandingComponent */] },
];
var AppRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/info-dialog/info-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info-dialog/info-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"para\" >\n  info-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/info-dialog/info-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoDialogComponent = (function () {
    function InfoDialogComponent() {
    }
    InfoDialogComponent.prototype.ngOnInit = function () {
    };
    return InfoDialogComponent;
}());
InfoDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-dialog',
        template: __webpack_require__("../../../../../src/app/info-dialog/info-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/info-dialog/info-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoDialogComponent);

//# sourceMappingURL=info-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/itempage/itempage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/itempage/itempage.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"para\" >\n  itempage works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/itempage/itempage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItempageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItempageComponent = (function () {
    function ItempageComponent() {
    }
    ItempageComponent.prototype.ngOnInit = function () {
    };
    return ItempageComponent;
}());
ItempageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-itempage',
        template: __webpack_require__("../../../../../src/app/itempage/itempage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/itempage/itempage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItempageComponent);

//# sourceMappingURL=itempage.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container  {\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    width: 100%;\n    margin: 0 0 0 0;\n    max-width: 100%;\n    padding: 0;\n    background: radial-gradient(circle, #673544 1%, black);\n    right: 0;\n}\n.contactbuttons {\n    position: absolute;\n    width: 300px;\n    height: 50px;\n    top: 80vh;\n    left: calc(50% - 190px);\n    background-color: transparent;\n    opacity:0;\n    transition: opacity 2s;\n    cursor: default;\n}\n.portfolio_title    {\n    position: absolute;\n    top: 100vh;\n    left: calc(50% - 150px);\n    font-family: 'Cinzel Decorative', sans-serif;\n    padding-top: 30px;\n    margin-bottom: 20px;\n    font-size: 48px;\n    color: white;\n    opacity: 1;\n\n}\n\n.portfolio_icon    {\n    position: absolute;\n    top: 93vh;\n    left: calc(50% - 24px);\n    font-size: 48px;\n    color: white;\n    opacity: .5;\n    cursor: pointer;\n\n}\n.email  {\n    font-family: 'Cinzel', sans-serif;\n    color: white;\n    position: absolute;\n    left: 30px;\n    top: 0;\n}\n.emailicon  {\n    color: white;\n    position: absolute;\n    left: 0;\n    top: 20px;\n    font-size: 25px;\n}\n\n.row    {\n}\n.img    {\n    height: 100%;\n    width: 100%;\n    margin:0;\n    padding:0;\n}\n.list    {\n    width: 80%;\n    position: absolute;\n    top: 5vh;\n    left: 10%;\n}\n.gridcon    {\n}\n.mobile-list    {;\n    display: none;\n}\n.uppertile   {\n    opacity: .2;\n    box-shadow: 0 10px 6px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n\n}\n.TitleCard {\n    //background-color: #1c1c1c;\n    width: 55%;\n    height: 440px;\n    z-index: 20;\n    top: calc(50vh - 300px);\n    right: 22.5%;\n    position: absolute;\n    opacity: .4;\n}\n.opac   {\n    width: 55%;\n    height: 440px;\n    z-index: 20;\n    top: calc(50vh - 300px);\n    right: 22.5%;\n    position: absolute;\n    opacity: 1;\n    cursor: default;\n}\n\n.name  {\n    width: 100%;\n    text-align: center;\n    font-family: 'Cinzel Decorative', serif;\n    position: absolute;\n    top:  10px;\n    font-size:  36px;\n    color: white;\n    padding-bottom: 10px;\n}\n.linebreak  {\n    margin: 80px 50px 0 ;\n}\n\n.text {\n    padding: 20px 50px 0;\n    font-family: 'Cinzel', sans-serif;\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 22px;\n    letter-spacing: 2px;\n    text-align: center;\n    color: #ffffff;\n}\n\n\n.gridlist   {\n    top: 115vh;\n    margin-bottom: 20px;\n}\n\n\n\n.textwrap   {\n    position: absolute;\n    width: 100%;\n    padding-left: 5px;\n\n}\n.h5 {\n    text-align: left;\n    font-size: 29px;\n    line-height: 20px;\n    font-family: 'Cenzil Decorative', serif;\n    color: white;\n}\n.h6  {\n    text-align: left;\n    font-family: 'Cenzil', serif;\n    font-size: 20px;\n    line-height: 20px;\n    color: white;\n\n}\n.para{\n    font-family: 'Cenzil', serif;\n    top: 70%;\n    color: white;\n    max-width: 80%;\n}\n.hr {\n    top: 55%;\n    color: white;\n}\n.wrapper    {\n    height: 100vh;\n    overflow-y: scroll;\n    margin-top: 0;\n    background-color: black;\n    background-position: right top;\n}\n.gridlist   {\n    width: 100%;\n    //margin: 0 17.5% 0;\n    padding-top: 10px;\n    padding-bottom: 10px !important;\n    height: auto;\n}\n.gridtile    {\n    padding: -50px;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    //border: solid 2px black;\n    transition: all .8s ease-in-out;\n}\n.Ally {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Assets/Ally-Side.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 90%;\n    transition: 1.4s ease;\n\n}\n.Ally:hover {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.April {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/April.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 35%;\n    transition: 1.4s ease;\n\n}\n.April:hover {\n    -webkit-filter: blur(4px);\n            filter: blur(4px);\n    opacity: .4;\n}\n.Gamberger {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Assets/Gamberger.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 5%;\n    transition: 1.4s ease;\n\n}\n.Gamberger:hover {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n.Carmen {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Assets/Carmen.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 57%;\n    transition: 1.4s ease;\n\n}\n.Carmen:hover {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n.Sol {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Assets/Sol.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 30%;\n    transition: 1.4s ease;\n\n}\n.Sol:hover {\n    -webkit-filter: blur(4px);\n            filter: blur(4px);\n    opacity: .4;\n}\n.Pasajeros_en_Trance {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Assets/Pasajeros.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 52%;\n    transition: 1.4s ease;\n\n}\n.Pasajeros_en_Trance_Text {\n    position: absolute;\n    top: 60px;\n    line-height:25px;\n    text-align: center;\n}\n.Pasajeros_en_Trance_Subtext    {\n    position: absolute;\n    top: 125px;\n    line-height:25px;\n    text-align: center;\n}\n.Pasajeros_en_Trance_Paragraph {\n    position: absolute;\n    top: 170px;\n    line-height:25px;\n    text-align: center;\n}\n.Pasajeros_en_Trance:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Faceless_God {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Imgs/Faceless_God_1.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 20%;\n    transition: 1.4s ease;\n\n}\n.Faceless_God:hover {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Carmensita {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Carmensita.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 40%;\n    transition: 1.4s ease;\n\n}\n.Carmensita:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.COS {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Assets/COS.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 30%;\n    transition: 1.4s ease;\n\n}\n.COS:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.The_Night_Bell {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Imgs/the_Night_Bell_1.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 30%;\n    transition: 1.4s ease;\n\n}\n\n.The_Night_Bell:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n\n.La_Gata {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/Imgs/La_Gata_1.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 55%;\n    transition: 1.4s ease;\n}\n.La_Gata:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Eclipse {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Eclipse.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 15%;\n    transition: 1.4s ease;\n}\n.Eclipse:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n\n.Aniise {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Aniise.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 70%;\n    transition: 1.4s ease;\n}\n.Aniise:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Sekhem {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Sekhem.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 45%;\n    transition: 1.4s ease;\n}\n.Sekhem:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n.Cuba {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Cuba.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 25%;\n    transition: 1.4s ease;\n}\n.Cuba:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n\n.Time   {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Time.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 40%;\n    transition: 1.4s ease;\n}\n.Time:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Zeri   {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Zeri.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 30%;\n    transition: 1.4s ease;\n}\n.Zeri:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Jaar   {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Jaar.png") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 17%;\n    transition: 1.4s ease;\n}\n.Jaar:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n\n.Meddle   {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Meddle.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 10%;\n    transition: 1.4s ease;\n}\n.Meddle:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n\n.Warehouse   {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Warehouse.jpg") + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 25%;\n    transition: 1.4s ease;\n}\n.Warehouse:hover   {\n\n    -webkit-filter: blur(4px);\n\n            filter: blur(4px);\n    opacity: .4;\n}\n.spacers    {\n    display:none;\n}\n\n.mobiletile {\n    display: none;\n}\n\n\n@media only screen and (max-width: 500px) {\n    .text {\n        padding: 10px 15% 0 ;\n        font-family: 'Cinzel', sans-serif;\n        font-size: 12px;\n        font-weight: 100;\n        line-height: 15px;\n        letter-spacing: 0;\n        text-align: center;\n        color: #ffffff;\n    }\n    .uppertile    {\n        opacity: .2;\n        box-shadow: 0 10px 6px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    }\n\n    .opac   {\n        width: 324px;\n        height: auto;\n        z-index: 20;\n        top: 10vh;\n        right: calc(50% - 162px);\n        position: absolute;\n        opacity: 1;\n    }\n    .TitleCard {\n        background-color: #1c1c1c;\n        width: 324px;\n        height: auto;\n        z-index: 20;\n        top: 10vh;\n        right: calc(50% - 162px);\n        position: absolute;\n        opacity: 0;\n    }\n    .name  {\n        width: 100%;\n        text-align: center;\n        font-family: 'Cinzel Decorative', sans-serif;\n        position: absolute;\n        color: white;\n        font-size: 24px;\n        margin-top: 0;\n    }\n    .linebreak  {\n        margin: 40px 50px 0 ;\n    }\n\n    .mobiletile {\n        display: block;\n        opacity: .2;\n    }\n    .mobile-list    {\n        display: block;\n        width: 80%;\n        position: absolute;\n        top: 77vh;\n        left: 10%;\n\n    }\n    .gridlist   {\n        width: 100%;\n        margin: -60px 0 0;\n        height:  850px;\n        top: 110vh;\n    }\n    .textwrap   {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        padding-left: 5px;\n    }\n    .hr {\n        display: none;\n    }\n    .para   {\n        display: none;\n    }\n    .contactbuttons {\n        position: absolute;\n        width: 300px;\n        height: 50px;\n        top: .5vh;\n        left: calc(50% - 130px);\n        background-color: transparent;\n        opacity:0;\n        transition: opacity 2s;\n        cursor: default;\n    }\n    .email  {\n        font-family: 'Cinzel', sans-serif;\n        color: white;\n        position: absolute;\n        left: 35px;\n        top: 0;\n        font-size: 14px;\n\n    }\n    .emailicon  {\n        color: white;\n        position: absolute;\n        left: 5px;\n        top: 15px;\n        font-size: 18px;\n    }\n\n    .portfolio_title    {\n        position: absolute;\n        top: 90vh;\n        padding-top: 20px;\n        left: calc(50% - 60px);\n        font-family: 'Cinzel', sans-serif;\n        font-size: 24px;\n        color: white;\n        opacity: 1;\n    }\n\n    .portfolio_icon    {\n        position: absolute;\n        top: 75vh;\n        left: calc(50% - 37.5px);\n        font-size: 68px;\n        color: white;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n    <div class=\"row\" >\n        <div class=\"col-md-8 col-md-offset-2 gridcon\"  >\n            <div class=\"hoverwrapper\" (mouseover)=\"EmailOpacity=1\" (mouseleave)=\"EmailOpacity=0\">\n                <div  class=\"TitleCard\" [ngStyle]=\"{opacity: Opacity}\" >\n\n                </div>\n                <div class=\"opac\" [ngStyle]=\"{opacity: Opacity}\" >\n                    <h3 class=\"name\"> CELINA BIURRUN</h3>\n                    <hr class=\"linebreak\">\n                    <p  class=\"text\">\n                        I come from San Nicolás de los Arroyos, Argentina and have lived in Mexico, Brazil and Switzerland. I made my first acting debut on the short film ‘Sekhem” in 2014, and have worked as an actress, producer and director since then. I am the co-founder of the Los Angeles based art collective Cosmo Entertainment and the media production company Trikon, Inc.\n                        <br>My greatest teacher in life has been the cultures I became acquainted with while moving from country to country since I was 14. I love the craft of filmmaking because it offers me the chance to still explore diverse life situations that contribute towards mine as well as other people’s inner growth.\n                    </p>\n                </div>\n                <md-grid-list   [cols]=\"2\" rowHeight=\"1:1\" [gutterSize]=\"20\" class=\"list\" >\n                    <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"uppertile\">\n                        <img src=\"../../assets/Land6.JPG\" class=\"img\">\n                    </md-grid-tile>\n                    <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"uppertile\">\n                        <img src=\"../../assets/Land7.png\" class=\"img\">\n                    </md-grid-tile>\n                    <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"uppertile\">\n                        <img src=\"../../assets/Land5.JPG\" class=\"img\" >\n                    </md-grid-tile>\n                    <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"uppertile\">\n                        <img src=\"../../assets/Land3.jpg\" class=\"img\" >\n                    </md-grid-tile>\n                    <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"mobiletile\">\n                        <img src=\"../../assets/Land1.jpg\" class=\"img\" >\n                    </md-grid-tile>\n                    <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"mobiletile\">\n                        <img src=\"../../assets/Land2.JPG\" class=\"img\" >\n                    </md-grid-tile>\n                </md-grid-list>\n                <!--INFO BUTTONS -->\n                <div class=\"contactbuttons\" [ngStyle]=\"{opacity: EmailOpacity}\" >\n                    <md-icon class=\"emailicon\">\n                        email\n                    </md-icon>\n                    <h3 class=\"email\">        BiurrunCelina@gmail.com\n                    </h3>\n                </div>\n\n                <!-- MOBILE PORTFOLIO TITLE -->\n                <h3 class=\"portfolio_title\" #PortfolioTitle>Portfolio</h3>\n                <md-icon class=\"material-icons portfolio_icon\" (click)=\"scroll(PortfolioTitle)\">keyboard_arrow_down</md-icon>\n            </div>\n            <!-- ----------------------------------------------------------------------------------------------->\n            <md-grid-list cols=\"4\" rowHeight=\"1:1\" [gutterSize]=\"15\"  class=\"gridlist\">\n\n\n\n\n                <!-- ALLY -->\n                <md-grid-tile class=\"gridtile\" [colspan]=\"4\" [rowspan]=\"1\" >\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Director | Lead</h6>\n                        <h5 class=\"h5\" >ALLY</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >An odyssey into the human mind discovering both sides of the subconscious spectrum</p>\n                    </div>\n                    <md-card class=\"Ally\"></md-card>\n                </md-grid-tile>\n\n\n                <!-- PASAJEROS EN TRANCE -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" > Co-Lead </h6>\n                        <h5 class=\"h5\" >PASAJEROS EN TRANCE</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\"  >A psychological voyage through the memory of time-obsessed office clerk Marcel as he chases the woman who stole his golden pocket watch</p>\n                    </div>\n                    <md-card class=\"Pasajeros_en_Trance\" ></md-card>\n                </md-grid-tile>\n\n\n                <!-- COS -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead | Producer</h6>\n                        <h5 class=\"h5\" >COS</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >A woman discovers many sides to her inner self through fashion</p>\n                    </div>\n                    <md-card class=\"COS\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- APRIL 19TH -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Director | Lead</h6>\n                        <h5 class=\"h5\" >Avril 19</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >A struggling individual ponders psychological hysteria through outer distractions</p>\n                    </div>\n                    <md-card class=\"April\">\n                    </md-card>\n                </md-grid-tile>\n\n\n\n                <!-- CUBA -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead</h6>\n                        <h5 class=\"h5\" >CUBA</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >Fashion Film</p>\n                    </div>\n                    <md-card class=\"Cuba\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- ECLIPSE -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Producer</h6>\n                        <h5 class=\"h5\" >ECLIPSE</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >Fashion Film</p>\n                    </div>\n                    <md-card class=\"Eclipse\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- ANIISE -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Model</h6>\n                        <h5 class=\"h5\" >ANIISE BEAUTY</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >Branded Content</p>\n                    </div>\n                    <md-card class=\"Aniise\">\n                    </md-card>\n                </md-grid-tile>\n\n\n                <!-- SEKHEM -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead </h6>\n                        <h5 class=\"h5\" >Sekhem</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >An exploration of the relationship artist-art following a sculpture artist and her creative process.</p>\n                    </div>\n                   <md-card class=\"Sekhem\"></md-card>\n                </md-grid-tile>\n\n                <!--  FACELESS GOD -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Supporting</h6>\n\n                        <h5 class=\"h5\" >Faceless God</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >Short Film</p>\n                    </div>\n                    <md-card class=\"Faceless_God\">\n                    </md-card>\n                </md-grid-tile>\n                <!-- GAMBERGER -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Art Director</h6>\n                        <h5 class=\"h5\" >Gamberger</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >An exploration of the relationship artist-art following a sculpture artist and her creative process.</p>\n                    </div>\n                    <md-card class=\"Gamberger\"></md-card>\n                </md-grid-tile>\n\n                <!-- LA GATA -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Production Runner</h6>\n                        <h5 class=\"h5\" >La Gata</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >Inspired by Esopo’s tale: ‘La Gatta Innamorata’, the film explores human nature through the concept of ‘nature exceeds nurture’</p>\n                    </div>\n                   <md-card class=\"La_Gata\">\n                    </md-card>\n                </md-grid-tile>\n\n\n                <!-- MARIA DEL CARMEN -->\n                <md-grid-tile class=\"gridtile\"   [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead </h6>\n                        <h5 class=\"h5\" >Maria Del Carmen</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\"> María del Carmen debates whether to call her mom</p>\n                    </div>\n                    <md-card class=\"Carmen\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- SEARCHING FOR JAAR -->\n                <md-grid-tile class=\"gridtile\"   [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Writer | Lead</h6>\n                        <h5 class=\"h5\" >Searching For Jaar</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\"> The intricate cycle of life is symbolized through seven metaphysical incidents within someone’s mind.</p>\n                    </div>\n                    <md-card class=\"Jaar\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- TIME-->\n                <md-grid-tile class=\"gridtile\"   [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead</h6>\n                        <h5 class=\"h5\" >Time</h5>\n                        <hr class=\"hr\"> Short Film\n                    </div>\n                    <md-card class=\"Time\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- MEDDLE-->\n                <md-grid-tile class=\"gridtile\"   [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Model</h6>\n                        <h5 class=\"h5\" >Meddle</h5>\n                        <hr class=\"hr\"> Fashion Film\n                    </div>\n                    <md-card class=\"Meddle\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- SOL Y MILAN -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead</h6>\n                        <h5 class=\"h5\" >Sol Y Milan</h5>\n                        <hr class=\"hr\">\n                    </div>\n\n                    <md-card class=\"Sol\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- WAREHOUSE -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Co-Lead</h6>\n                        <h5 class=\"h5\" >The Warehouse</h5>\n                        <hr class=\"hr\">\n                    </div>\n                    <md-card class=\"Warehouse\">\n                    </md-card>\n                </md-grid-tile>\n\n                <!-- CARMENSITA -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Lead</h6>\n\n                        <h5 class=\"h5\" >Carmensita</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >After five years of abandonment, Carmen’s mother returns home</p>\n                    </div>\n                    <md-card class=\"Carmensita\" ></md-card>\n                </md-grid-tile>\n\n                <!-- ZERI -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Producer</h6>\n\n                        <h5 class=\"h5\" >Zeri - Contigo</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >Music Video</p>\n                    </div>\n                    <md-card class=\"Zeri\">\n                    </md-card>\n                </md-grid-tile>\n\n\n\n\n\n                <!-- THE NIGHT BELL -->\n                <md-grid-tile class=\"gridtile\"  [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"textwrap\">\n                        <h6 class=\"h6\" >Supporting</h6>\n                        <h5 class=\"h5\" >The Night Bell</h5>\n                        <hr class=\"hr\">\n                        <p class=\"para\" >A nurse’s job at a morgue turns into a nightmare as the female corpses come to life</p>\n                    </div>\n                    <md-card class=\"The_Night_Bell\">\n                    </md-card>\n                </md-grid-tile>\n\n\n\n\n\n                <!-- --------------------------------------------------------------------------------------------->\n            </md-grid-list>\n\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = (function () {
    function LandingComponent(router) {
        this.router = router;
        this.ShowEmail = false;
        this.EmailOpacity = 0;
    }
    LandingComponent.prototype.ngOnInit = function () {
        console.log("hello");
    };
    LandingComponent.prototype.getCurrentOffsetTop = function (element) {
        var rect = element.nativeElement.getBoundingClientRect();
        return rect.top + window.pageYOffset - document.documentElement.clientTop;
    };
    LandingComponent.prototype.onWindowScroll = function () {
        console.log(this.getCurrentOffsetTop(this.Container));
    };
    LandingComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    return LandingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('container'),
    __metadata("design:type", Object)
], LandingComponent.prototype, "Container", void 0);
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/assets/Aniise.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Aniise.0f9212ddea5b77f5132f.jpg";

/***/ }),

/***/ "../../../../../src/assets/April.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "April.e4e23af6d52847090c38.jpg";

/***/ }),

/***/ "../../../../../src/assets/Carmensita.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Carmensita.defe2d5862d769df7576.png";

/***/ }),

/***/ "../../../../../src/assets/Cuba.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Cuba.d050ff27794d6fe4cfb5.jpg";

/***/ }),

/***/ "../../../../../src/assets/Eclipse.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Eclipse.8da4918abf9b3bb8c2b6.png";

/***/ }),

/***/ "../../../../../src/assets/Jaar.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Jaar.3128f79b3cda1343a16e.png";

/***/ }),

/***/ "../../../../../src/assets/Meddle.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Meddle.e787618047e053dbb12b.jpg";

/***/ }),

/***/ "../../../../../src/assets/Sekhem.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Sekhem.13855534b98a31f024c8.jpg";

/***/ }),

/***/ "../../../../../src/assets/Time.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Time.3cbe838689decd1a9dcf.jpg";

/***/ }),

/***/ "../../../../../src/assets/Warehouse.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Warehouse.c9d8307c31cea8c7b9af.jpg";

/***/ }),

/***/ "../../../../../src/assets/Zeri.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Zeri.fbd22e87de24910bf7dc.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map