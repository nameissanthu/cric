webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/SearchFilterPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n<simple-notifications [options]=\"options\"></simple-notifications>\n\n  \n  \n\n  \n \n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.options = {
            timeOut: 5000,
            lastOnBottom: true,
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/home/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_slider_slider_component__ = __webpack_require__("../../../../../src/app/home/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_grid_grid_component__ = __webpack_require__("../../../../../src/app/home/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_footer_footer_component__ = __webpack_require__("../../../../../src/app/home/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__review_first_first_component__ = __webpack_require__("../../../../../src/app/review/first/first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__teams_chennai_chennai_component__ = __webpack_require__("../../../../../src/app/teams/chennai/chennai.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_home_component__ = __webpack_require__("../../../../../src/app/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_team_service__ = __webpack_require__("../../../../../src/app/service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__teams_mumbai_mumbai_component__ = __webpack_require__("../../../../../src/app/teams/mumbai/mumbai.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_getreq_service__ = __webpack_require__("../../../../../src/app/service/getreq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_reviews_reviews_component__ = __webpack_require__("../../../../../src/app/home/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__review_allreviews_allreviews_component__ = __webpack_require__("../../../../../src/app/review/allreviews/allreviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home2_home2_component__ = __webpack_require__("../../../../../src/app/home2/home2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__SearchFilterPipe__ = __webpack_require__("../../../../../src/app/SearchFilterPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_login_login_component__ = __webpack_require__("../../../../../src/app/dashboard/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_forms_forms_component__ = __webpack_require__("../../../../../src/app/dashboard/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_getpost_service__ = __webpack_require__("../../../../../src/app/dashboard/getpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_authguard_service__ = __webpack_require__("../../../../../src/app/dashboard/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_auth_service__ = __webpack_require__("../../../../../src/app/dashboard/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_validate_service__ = __webpack_require__("../../../../../src/app/dashboard/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__separate_form_form_component__ = __webpack_require__("../../../../../src/app/separate/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__cricslides_cricslides_component__ = __webpack_require__("../../../../../src/app/cricslides/cricslides.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var routes = ([{ path: '', component: __WEBPACK_IMPORTED_MODULE_18__home2_home2_component__["a" /* Home2Component */] }, { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__home_home_home_component__["a" /* HomeComponent */] }, { path: 'chennai', component: __WEBPACK_IMPORTED_MODULE_10__teams_chennai_chennai_component__["a" /* ChennaiComponent */] },
    { path: "mumbai", component: __WEBPACK_IMPORTED_MODULE_14__teams_mumbai_mumbai_component__["a" /* MumbaiComponent */] }, { path: "reviews", component: __WEBPACK_IMPORTED_MODULE_16__home_reviews_reviews_component__["a" /* ReviewsComponent */] },
    { path: 'task/:cricket', component: __WEBPACK_IMPORTED_MODULE_17__review_allreviews_allreviews_component__["a" /* AllreviewsComponent */] },
    { path: 'dashlogin', component: __WEBPACK_IMPORTED_MODULE_21__dashboard_login_login_component__["a" /* LoginComponent */] }, { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_22__dashboard_forms_forms_component__["a" /* FormsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__dashboard_authguard_service__["a" /* AuthguardService */]] }]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_slider_slider_component__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__review_first_first_component__["a" /* FirstComponent */],
                __WEBPACK_IMPORTED_MODULE_10__teams_chennai_chennai_component__["a" /* ChennaiComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__teams_mumbai_mumbai_component__["a" /* MumbaiComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_reviews_reviews_component__["a" /* ReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__review_allreviews_allreviews_component__["a" /* AllreviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home2_home2_component__["a" /* Home2Component */],
                __WEBPACK_IMPORTED_MODULE_20__SearchFilterPipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__dashboard_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dashboard_forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__separate_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__SearchFilterPipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_29__spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__cricslides_cricslides_component__["a" /* CricslidesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_angular2_notifications__["SimpleNotificationsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__service_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_15__service_getreq_service__["a" /* GetreqService */], __WEBPACK_IMPORTED_MODULE_23__dashboard_getpost_service__["a" /* GetPostService */], __WEBPACK_IMPORTED_MODULE_24__dashboard_authguard_service__["a" /* AuthguardService */], __WEBPACK_IMPORTED_MODULE_25__dashboard_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_26__dashboard_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cricslides/cricslides.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cricslides/cricslides.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\n    <ng-template ngbSlide>\n      <img src=\"assets/slide1.jpg\" class=\"img-fluid img-thumbnail\" alt=\"Random first slide\">\n      \n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"assets/slide2.jpg\" class=\"img-fluid img-thumbnail\" alt=\"Random second slide\">\n\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"https://d1hl0z0ja1o93t.cloudfront.net/wp-content/uploads/2017/03/11144449/ipl.jpg\" class=\"img-fluid img-thumbnail\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n  "

/***/ }),

/***/ "../../../../../src/app/cricslides/cricslides.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CricslidesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CricslidesComponent = /** @class */ (function () {
    function CricslidesComponent() {
    }
    CricslidesComponent.prototype.ngOnInit = function () {
    };
    CricslidesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cricslides',
            template: __webpack_require__("../../../../../src/app/cricslides/cricslides.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cricslides/cricslides.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CricslidesComponent);
    return CricslidesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.updateStatus = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/task/' + task._id, JSON.stringify(task), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/dashboard/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    AuthguardService.prototype.canActivate = function () {
        if (this.authservice.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashlogin']);
            return false;
        }
    };
    AuthguardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-danger{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#D40000), to(#340000));\r\n    background: linear-gradient(#D40000, #340000);\r\n}\r\ninput{\r\n    margin:4px;\r\n}\r\n\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container text-center\">\n    <div class=\"row\">\n    <div class=\"col-md-8\">\n        <form>\n             <h3 style=\"color:bisque\">Post Team</h3>\n    <!-- <input type=\"text\" class=\"form-control\" #matchdate name=\"match_date\" [(ngModel)]=\"match_date\"   placeholder=\"Match Date\"> -->\n   <input type=\"text\" class=\"form-control\" #imageurl name=\"imgurl\" [(ngModel)]=\"imgurl\" placeholder=\"Paste Match ImageUrl\">\n    <input type=\"text\" class=\"form-control\" #teamoneimg name=\"to_imgurl\" [(ngModel)]=\"to_imgurl\"  placeholder=\"Team1 ImageUrl\">\n    <input type=\"text\" class=\"form-control\" #teamonename name=\"to_team\" [(ngModel)]=\"to_team\"  placeholder=\"Team1 Name\">\n    <input type=\"text\" class=\"form-control\" #teamtwoimg name=\"from_imgurl\" [(ngModel)]=\"from_imgurl\" placeholder=\"Team2 ImageUrl\">\n    <input type=\"text\" class=\"form-control\" #teamtwoname name=\"from_team\" [(ngModel)]=\"from_team\" placeholder=\"Team2 Name\">\n    <input type=\"text\" class=\"form-control\" #tweoneeleven name=\"team_one_11\" [(ngModel)]=\"team_one_11\" placeholder=\"Team one expected 11\">\n    <input type=\"text\" class=\"form-control\" #teamtwoeleven name=\"team_two_11\" [(ngModel)]=\"team_two_11\" placeholder=\"Team two expected 11\">\n    <input type=\"text\" class=\"form-control\"  #dreameleven name=\"dream11\" [(ngModel)]=\"dream11\"  placeholder=\"Dream11 Imageurl\"> \n    <textarea  placeholder=\"Match Description\"#teamdesc name=\"match_desc\" [(ngModel)]=\"match_desc\" class=\"form-control\" ></textarea><br>\n    \n    \n    <button class=\"btn btn-danger btn-block\" (click)=\"addTask($event)\" type=\"submit\">Submit</button>\n  \n   </form>\n    </div>\n    \n  \n    \n        <div class=\"col-md-4 text-center\">\n         \n            <div class=\"card\" style=\"width: 18rem;\">\n                <h2>Preview</h2>  \n                <ul class=\"list-group list-group-flush\">\n                  <img src=\"{{teamoneimg.value}}\" height=\"150\"/>\n                   \n                  <h1 style=\"background-color:orange; color:white\">vs</h1>\n                  <img src=\"{{teamtwoimg.value}}\"  height=\"150\"/>\n                  \n                </ul>\n              \n              <button class=\"btn btn-primary\">See Predection</button>\n            <div class=\"card-footer text-muted\">\n            Posted on {{date_match}}\n            </div>\n          </div>\n          </div>\n  \n    \n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getpost_service__ = __webpack_require__("../../../../../src/app/dashboard/getpost.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsComponent = /** @class */ (function () {
    function FormsComponent(getreq, _notification) {
        var _this = this;
        this.getreq = getreq;
        this._notification = _notification;
        this.date_match = new Date().toDateString();
        this.getreq.getTasks()
            .subscribe(function (cricket) {
            _this.cricket = cricket;
        });
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            imgurl: this.imgurl,
            from_team: this.from_team,
            to_team: this.to_team,
            date_match: this.date_match,
            to_imgurl: this.to_imgurl,
            from_imgurl: this.from_imgurl,
            match_desc: this.match_desc,
            team_one_11: this.team_one_11,
            team_two_11: this.team_two_11,
            dream11: this.dream11
        };
        this.getreq.addTask(newTask)
            .subscribe(function (task) {
            _this.cricket.push(task);
            alert("posted");
            _this._notification.success('Success posted');
        });
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__("../../../../../src/app/dashboard/forms/forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__getpost_service__["a" /* GetPostService */], __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["NotificationsService"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/getpost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetPostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetPostService = /** @class */ (function () {
    function GetPostService(http) {
        this.http = http;
    }
    // apiUrl= environment.apiurl
    GetPostService.prototype.getTasks = function () {
        // return this.http.get(this.apiUrl +'/api/reviews')
        return this.http.get('api/reviews')
            .map(function (res) { return res.json(); });
    };
    GetPostService.prototype.addTask = function (newTask) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post(this.apiUrl+'/api/task', JSON.stringify(newTask), {headers: headers})
        return this.http.post('api/task', JSON.stringify(newTask), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetPostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetPostService);
    return GetPostService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#D40000), to(#340000));\r\n  background: linear-gradient(#D40000, #340000);\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  -webkit-transition: all 0.3 ease;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#D40000), to(#340000));\r\n    background: linear-gradient(#D40000, #340000);\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n\r\nbody {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#D40000), to(#340000));\r\n    background: linear-gradient(#D40000, #340000); /* fallback for old browsers */\r\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;      \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"form\">\n    \n    <form class=\"login-form\" (submit)=\"onLoginSubmit()\">\n      <input type=\"text\" placeholder=\"username\" [(ngModel)]=\"username\" name=\"username\"/>\n      <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\"/>\n      <button type=\"sumbit\">login</button>\n      \n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/dashboard/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, _notification, router) {
        this.authservice = authservice;
        this._notification = _notification;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authservice.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authservice.storeUserData(data.token, data.user);
                _this._notification.success('You are now logged in');
                _this.router.navigate(['forms']);
            }
            else {
                _this._notification.error(data.msg);
                _this.router.navigate(['dashlogin']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/dashboard/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\" style=\"padding-top: 60px;  background: linear-gradient(#D40000, #340000);\">\n    <div class=\"container\" class=\"text-center\">\n      <span style=\"color:white;\">90/100 all rights reserved</span>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/grid/grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n margin-bottom: 30px;\r\n}\r\n.card {\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n   \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Pacifico\" rel=\"stylesheet\">\n<div class=\"row text-center\">\n  <div class=\"col-md-12\">\n \n   <h2 style=\"font-family: 'Pacifico', regular; color:#fff;\"><img src=\"./assets/ipl.png\" height=\"50px\">Indian Premier League 2018</h2>\n    \n  </div>\n</div>\n<div class=\"bg-img\">\n\n<div class=\"row\">\n  <div class=\" col-md-4 col-lg-3 col-xs-6\">\n      <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top img-thumbnail\" src=\"./assets/chennai.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Chennai Super Kings\n                </h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <button (click)=\"chennai()\" class=\"btn btn-primary btn-block\">View Team</button>\n          </div>\n        </div>\n  </div>\n  \n  <div class=\" col-md-6 col-lg-3 col-sm-6\">\n      <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top img-thumbnail\" src=\"./assets/mumbai.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Mumbai Indians</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <button (click)=\" redirectTo()\" class=\"btn btn-primary btn-block\">View Team</button>\n          </div>\n        </div>\n  </div>\n  <div class=\" col-md-6 col-lg-3 col-sm-6\">\n      <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top img-thumbnail\" src=\"./assets/beng.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Bangalore</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <button class=\"btn btn-primary btn-block\">View Team</button>\n          </div>\n        </div>\n  </div>\n  <div class=\" col-md-6 col-lg-3 col-sm-6\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top img-thumbnail\" src=\"./assets/royals.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Rajasthan Royals\n              </h4>\n             <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n             <button class=\"btn btn-primary btn-block\">View Team</button>\n        </div>\n      </div>\n</div>\n\n<div class=\"col-lg-3 col-md-6 col-lg-3  col-sm-6\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top img-thumbnail\" src=\"./assets/punjab.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Kings XI Punjab\n              </h4>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <button class=\"btn btn-primary btn-block\">View Team</button>\n        </div>\n      </div>\n</div>\n<div class=\" col-md-6 col-lg-3 col-sm-6\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top img-thumbnail\" src=\"./assets/delhi.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Delhi Daredevils</h4>  \n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <button class=\"btn btn-primary btn-block\">View Team</button>\n        </div>\n      </div>\n</div>\n<div class=\" col-md-6 col-lg-3 col-sm-6\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top img-thumbnail\" src=\"./assets/riders.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Kolkata Knight Riders</h4>  \n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <button class=\"btn btn-primary btn-block\">View Team</button>\n        </div>\n      </div>\n</div>\n<div class=\" col-md-6 col-lg-3 col-sm-6\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top img-thumbnail\" src=\"./assets/hyd.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Sunrisers Hyderabad\n              </h4>  \n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <button class=\"btn btn-primary btn-block\">View Team</button>\n        </div>\n      </div>\n</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = /** @class */ (function () {
    function GridComponent(_router) {
        this._router = _router;
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.redirectTo = function () {
        this._router.navigate(['/mumbai']);
        window.scrollTo(0, 0);
    };
    GridComponent.prototype.chennai = function () {
        this._router.navigate(['/chennai']);
        window.scrollTo(0, 0);
    };
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__("../../../../../src/app/home/grid/grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n    <app-grid></app-grid>\n  </div>\n  <app-slider></app-slider><br>\n  \n <app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-primary {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#D40000), to(#340000));\r\n    background: linear-gradient(#D40000, #340000);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"\"><img src=\"./assets/logo.png\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"  data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\" data-target=\".navbar-collapse\" data-toggle=\"collapse\"  >\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"reviews\">Reviews</a>\n      </li>\n     \n      <li class=\"nav-item active\" *ngIf=\"authservice.loggedIn()\">\n        <a class=\"nav-link\" routerLink=\"forms\">Post Teams</a>\n      </li>\n      <li class=\"nav-item dropdown active\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n           Indian Premier League 2018\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"home\">Teams</a>\n            <a class=\"dropdown-item\" routerLink=\"reviews\">Prediction</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      <li class=\"nav-item active\">\n        <!-- <a class=\"nav-link\" routerLink=\"dashlogin\" *ngIf=\"!authservice.loggedIn()\">Login</a> -->\n        <a class=\"nav-link\" *ngIf=\"authservice.loggedIn()\" (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n    <form class=\"form-inline active\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" />\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/home/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_validate_service__ = __webpack_require__("../../../../../src/app/dashboard/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_auth_service__ = __webpack_require__("../../../../../src/app/dashboard/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authservice, validatesvs, router, _notification) {
        this.authservice = authservice;
        this.validatesvs = validatesvs;
        this.router = router;
        this._notification = _notification;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authservice.logout();
        this._notification.success('You are logged out');
        this.router.navigate(['/dashlogin']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/home/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__dashboard_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__dashboard_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-form></app-form>\n"

/***/ }),

/***/ "../../../../../src/app/home/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_getreq_service__ = __webpack_require__("../../../../../src/app/service/getreq.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(getReq) {
        var _this = this;
        this.getReq = getReq;
        this.getReq.getTasks().subscribe(function (teams) {
            _this.teams = teams;
        });
    }
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__("../../../../../src/app/home/reviews/reviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_getreq_service__["a" /* GetreqService */]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators3\" class=\"carousel carousel-fade\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"1\" class=\"\"></li>\n    <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"2\" class=\"\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\" >\n    <div class=\"carousel-item active animated fadeIn\" style=\"height: 450px\">\n      <img src=\"./assets/home-slide2.jpg\" style=\"height:100% !important\">\n      <div class=\"carousel-caption\">\n        <h3 class=\"carousel-title animated bounceInRight\" style=\"padding: 5px;\n        background: linear-gradient(#D40000, #340000);border-radius: 25px;\">IPl Winners 2017</h3>\n        <p class=\"carousel-subtitle animated bounceInLeft\" style=\"padding: 3px;\n        background: linear-gradient(#FAB50F, #340000);border-radius: 15px;\">Mumbai Indians</p>\n      </div>\n    </div>\n    <div class=\"carousel-item animated fadeIn\" style=\"height: 450px\">\n      <img src=\"./assets/home-slide3.jpg\" style=\"height:100% !important\">\n      <div class=\"carousel-caption\">\n        <h3 class=\"carousel-title animated bounceInRight\" style=\"padding: 5px;\n        background: linear-gradient(#D40000, #340000);border-radius: 25px;\">IPl Winners 2016</h3>\n        <p class=\"carousel-subtitle animated bounceInLeft\" style=\"padding: 3px;\n        background: linear-gradient(#FAB50F, #340000);border-radius: 15px;\">Hyderabad</p>\n      </div>\n    </div>\n    <div class=\"carousel-item animated fadeIn\" style=\"height: 450px\">\n      <img src=\"./assets/home-slide4.jpg\" style=\"height:100% !important\">\n      <div class=\"carousel-caption\">\n        <h3 class=\"carousel-title animated bounceInRight\" style=\"padding: 5px;\n        background: linear-gradient(#D40000, #340000);border-radius: 25px;\">IPl Winners 2015</h3>\n        <p class=\"carousel-subtitle animated bounceInLeft\" style=\"padding: 3px;\n        background: linear-gradient(#FAB50F, #340000);border-radius: 15px;\">Mumbai Indians</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__("../../../../../src/app/home/slider/slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home2/home2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    border:dotted;\r\n    border-bottom-color: skyblue;\r\n    \r\n}\r\n.card-title{\r\n    color:black;\r\n}\r\n.card {\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n   \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home2/home2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n <app-cricslides></app-cricslides>\r\n</div><br>\r\n<div class=\"container text-center\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h2 style=\"color:#fff;\">How To Set Dream11 Team</h2>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top\" src=\"https://bryanavery.co.uk/wp-content/uploads/2017/06/tip-and-tricks-apps-580x218.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top\" src=\"https://bryanavery.co.uk/wp-content/uploads/2017/06/tip-and-tricks-apps-580x218.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top\" src=\"https://bryanavery.co.uk/wp-content/uploads/2017/06/tip-and-tricks-apps-580x218.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n              </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home2/home2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Home2Component = /** @class */ (function () {
    function Home2Component() {
    }
    Home2Component.prototype.ngOnInit = function () {
    };
    Home2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home2',
            template: __webpack_require__("../../../../../src/app/home2/home2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home2/home2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Home2Component);
    return Home2Component;
}());



/***/ }),

/***/ "../../../../../src/app/review/allreviews/allreviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".circle-text {\r\n    display: table-cell;\r\n    height: 50px; /*change this and the width\r\n    for the size of your initial circle*/\r\n    width: 50px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    \r\n    border-radius: 50%;\r\n    /*make it pretty*/\r\n    background: #000;\r\n    color: #fff;\r\n    font: 18px \"josefin sans\", arial; /*change this\r\n    for font-size and font-family*/\r\n    }\r\n    /* .card-title{\r\n        background: linear-gradient(#D40000, #340000);\r\n        border-radius: 30px;\r\n    } */\r\n    li {\r\n        display:block;\r\n        float:left;\r\n     \r\n        color:white;\r\n        margin-right:10px;\r\n    }\r\n    a{\r\n        color: #fff;\r\n    }\r\n   \r\n      \r\n    \r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/review/allreviews/allreviews.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"color:white\" class=\"text-center\">\n    <img [src]=\"cricket.imgurl\" class=\"img-fluid\" alt=\"image\">\n    <h1>{{cricket.to_team}}</h1>\n    <h1>{{cricket.from_team}}</h1>\n</div> -->\n\n\n<!-- <div class=\"card bg-dark text-white text-center\">\n        <img class=\"card-img img-fluid\" src=\"{{cricket.imgurl}}\" alt=\"Card image\">\n        <div class=\"card-img-overlay\">\n          <h3 class=\"card-title\">{{cricket.to_team}}</h3>\n          <h3 class=\"card-title\">{{cricket.from_team}}</h3>\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          <p class=\"card-text\">Last updated 3 mins ago</p>\n        </div>\n</div> --><br>\n<!-- <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\" [class.active]=\"viewMode == 'overview'\">\n    <a class=\"nav-link active\" (click)= \"viewMode = 'overview'\">Team Preview</a>\n  </li>\n  <li class=\"nav-item\" [class.active]=\"viewMode == 'toteameleven'\">\n    <a class=\"nav-link\" (click)= \"viewMode = 'toteameleven'\">{{cricket.to_team}} Playing 11</a>\n  </li>\n  <li class=\"nav-item\" [class.active]=\"viewMode == 'fromteameleven'\">\n    <a class=\"nav-link\" (click)= \"viewMode = 'fromteameleven'\">{{cricket.from_team}} Playing 11</a>\n  </li>\n  <li class=\"nav-item\" [class.active]=\"viewMode == 'dreameleven'\">\n    <a class=\"nav-link\" (click)= \"viewMode = 'dreameleven'\">Dream11 super team</a>\n  </li>\n</ul> -->\n\n<!-- <div class=\"text-center container\">\n  <ul class=\"nav nav-tabs\">\n    <li  [class.active]=\"viewMode == 'overview'\">\n      <a class=\"nav-link active\" (click)= \"viewMode = 'overview'\">Team Preview</a>\n    </li>\n    <li [class.active]=\"viewMode == 'toteameleven'\">\n      <a class=\"nav-link active\" (click)= \"viewMode = 'toteameleven'\">{{cricket.to_team}} Playing 11</a>\n    </li>\n    <li  [class.active]=\"viewMode == 'fromteameleven'\">\n      <a class=\"nav-link active\" (click)= \"viewMode = 'fromteameleven'\">{{cricket.from_team}} Playing 11</a>\n    </li>\n    <li [class.active]=\"viewMode == 'dreameleven'\">\n      <a class=\"nav-link active\" (click)= \"viewMode = 'dreameleven'\">Dream11 super team</a>\n    </li>\n  </ul><br>\n<div [ngSwitch]=\"viewMode\" style=\"color:wheat\">\n  <div *ngSwitchCase= \"'overview'\">\n    <img [src]=\"cricket.imgurl\" class=\"img-fluid img-thumbnail\" alt=\"image\">\n    <p class=\"text-justify card-body\">{{cricket.match_desc}}</p>\n  </div>\n  <div *ngSwitchCase = \"'toteameleven'\">\n    toteameleven\n  </div>\n  <div *ngSwitchCase =\"'fromteameleven'\">\n    fromteameleven\n  </div>\n  <div *ngSwitchCase =\"'dreameleven'\">\n    dreameleven\n  </div>\n</div>\n</div> -->\n    \n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Team Preview</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">{{cricket.to_team}} Playing 11</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">{{cricket.from_team}} Playing 11</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"dream-tab\" data-toggle=\"tab\" href=\"#dream\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Dream11 super team</a>\n  </li>\n</ul><br>\n<div class=\"tab-content text-center container\" id=\"myTabContent\" style=\"color:wheat\">\n  <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n    <img [src]=\"cricket.imgurl\" class=\"img-fluid img-thumbnail\" alt=\"image\">\n   <br><br> <div class=\"bg-warning\" style=\"color:black !important\">\n    <div class=\"card-header\">Match Preview</div>\n    <p class=\"text-justify card-body\">{{cricket.match_desc}}</p>\n  </div>\n</div>\n  <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n    <div class=\"bg-success\">\n      <div class=\"card-header\">{{cricket.to_team}}</div>\n      <p class=\"text-justify card-body\">{{cricket.team_one_11}}</p>\n    </div>\n  </div>\n  <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n    <div class=\"bg-success\">\n      <div class=\"card-header\">{{cricket.from_team}}</div>\n      <p class=\"text-justify card-body\">{{cricket.team_two_11}}</p>\n    </div>\n  </div>\n  <div class=\"tab-pane fade\" id=\"dream\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n    <img [src]=\"cricket.dream11\" class=\"img-fluid img-thumbnail\" alt=\"image\">\n  </div>\n</div>\n\n     \n\n    \n\n\n"

/***/ }),

/***/ "../../../../../src/app/review/allreviews/allreviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllreviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_getreq_service__ = __webpack_require__("../../../../../src/app/service/getreq.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllreviewsComponent = /** @class */ (function () {
    //  private sub: any;
    function AllreviewsComponent(route, getreq) {
        this.route = route;
        this.getreq = getreq;
        this.showspin = true;
        this.viewMode = 'overview';
    }
    AllreviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        //  this.sub = this.route.params.subscribe(params => {
        //   this.cric = params['cric']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
        //  });
        this.cricket = this.route.snapshot.paramMap.get(('cricket'));
        // alert(this.cricket);
        this.getreq.GetSingleTask(this.cricket)
            .subscribe(function (cricket) {
            _this.cricket = cricket;
            _this.showspin = false;
        });
    };
    AllreviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-allreviews',
            template: __webpack_require__("../../../../../src/app/review/allreviews/allreviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/review/allreviews/allreviews.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_getreq_service__["a" /* GetreqService */]])
    ], AllreviewsComponent);
    return AllreviewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/review/first/first.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/review/first/first.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  first works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/review/first/first.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-first',
            template: __webpack_require__("../../../../../src/app/review/first/first.component.html"),
            styles: [__webpack_require__("../../../../../src/app/review/first/first.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "../../../../../src/app/separate/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n}\r\n.col-md-4 :hover{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#D40000), to(#340000));\r\n    background: linear-gradient(#D40000, #340000);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/separate/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let team of teams\" class=\"container\">\n    <h1>{{team.imgurl}}</h1>\n    <h1>{{team.to_team}}</h1>\n    <h1>{{team.from_team}}</h1>\n    <h1>{{team.date_match}}</h1>\n    <h1>{{team.match_desc}}</h1>\n    <h1>{{team.to_imgurl}}</h1>\n    <h1>{{team.from_imgurl}}</h1>\n  </div> -->\n \n\n           \n<div class=\"container text-center\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search By Teams\" [(ngModel)]=\"query\"><br>\n  <div class=\"row\">\n     \n      \n    <div class=\"col-md-4\" *ngFor=\"let cric of cricket | search:'to_team,from_team':query\">\n        <div class=\"card\" style=\"width: 18rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <img src=\"{{cric.to_imgurl}}\" height=\"150\"/>\n               \n              <h1 style=\"background-color:orange; color:white\">vs</h1>\n              <img src=\"{{cric.from_imgurl}}\"  height=\"150\"/>\n              \n            </ul>\n          \n          <a [routerLink]=\"['/task', cric._id]\" class=\"btn btn-primary\">See Predection</a>\n        <div class=\"card-footer text-muted\">\n        Posted on {{cric.date_match}}\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-center\" *ngIf=\"showspinner\">\n    <app-spinner></app-spinner>\n  </div>\n\n\n \n    "

/***/ }),

/***/ "../../../../../src/app/separate/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_getreq_service__ = __webpack_require__("../../../../../src/app/service/getreq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(getreq, router) {
        var _this = this;
        this.getreq = getreq;
        this.router = router;
        this.showspinner = true;
        this.getreq.getTasks()
            .subscribe(function (cricket) {
            _this.cricket = cricket;
            _this.showspinner = false;
        });
    }
    //  goToProductDetails(cricket) {
    //   this.router.navigate(['/task', {cricket:cricket}]);
    // }
    FormComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            imgurl: this.imgurl,
            from_team: this.from_team,
            to_team: this.to_team,
            date_match: this.date_match,
            to_imgurl: this.to_imgurl,
            from_imgurl: this.from_imgurl,
            match_desc: this.match_desc
        };
        this.getreq.addTask(newTask)
            .subscribe(function (task) {
            _this.cricket.push(task);
            _this.imgurl = "",
                _this.from_team = "",
                _this.to_team = "",
                _this.date_match = "",
                _this.to_imgurl = "",
                _this.from_imgurl = "",
                _this.match_desc = "";
            _this.router.navigate(['/']);
        });
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/separate/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/separate/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_getreq_service__["a" /* GetreqService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/getreq.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetreqService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetreqService = /** @class */ (function () {
    function GetreqService(http) {
        this.http = http;
    }
    // apiUrl= environment.apiurl
    GetreqService.prototype.getTasks = function () {
        // return this.http.get(this.apiUrl +'/api/reviews')
        return this.http.get('api/reviews')
            .map(function (res) { return res.json(); });
    };
    GetreqService.prototype.addTask = function (newTask) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post(this.apiUrl+'/api/task', JSON.stringify(newTask), {headers: headers})
        return this.http.post('api/task', JSON.stringify(newTask), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetreqService.prototype.GetSingleTask = function (id) {
        // return this.http.get(this.apiUrl+'/api/task/'+id)
        return this.http.get('api/task/' + id)
            .map(function (res) { return res.json(); });
    };
    GetreqService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetreqService);
    return GetreqService;
}());



/***/ }),

/***/ "../../../../../src/app/service/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamService = /** @class */ (function () {
    function TeamService() {
        this.chennai = [
            { player: "MS Dhoni", imgurl: "./assets/chennai/dhoni.jpg", type: "WK-Batsman", price: "Retained" },
            { player: "Suresh Raina", imgurl: "./assets/chennai/raina.jpg", type: "Batsman", price: "Retained" },
            { player: "Murali Vijay", imgurl: "./assets/chennai/vijay.jpg", type: "Batsman", price: "2.00 Crore" },
            { player: "Ravindra Jadeja", imgurl: "./assets/chennai/jadeja.jpg", type: "Bowling Allrounder", price: "Retained" },
            { player: "Kedar Jadhav", imgurl: "./assets/chennai/jadav.jpg", type: "Batsman", price: "7.80 Crore" },
            { player: "Harbhajan Singh", imgurl: "./assets/chennai/bajji.jpg", type: "Bowling", price: "2.00 Crore" },
            { player: "Shardul Thakur", imgurl: "./assets/chennai/thakur.jpg", type: "Bowling", price: "2.60 Crore" },
            { player: "Karn Sharma", imgurl: "./assets/chennai/karan.jpg", type: "Bowling Allrounde", price: "5.00 Crore" },
            { player: "Ambati Rayudu", imgurl: "./assets/chennai/rayudu.jpg", type: "WK-Batsman", price: "2.20 Crore" },
            { player: "Deepak Chahar", imgurl: "./assets/chennai/chahar.jpg", type: "Bowler", price: "80.00 Lakh" },
            { player: "Faf du Plessis", imgurl: "./assets/chennai/faf.jpg", type: "Batsman • South Africa", price: "1.60 Crore", icon: "fa fa-plane" },
            { player: "Shane Watson", imgurl: "./assets/chennai/watson.jpg", type: "Batting Allrounder • Australia", price: "4.00 Crore", icon: "fa fa-plane" },
            { player: "Dwayne Bravo", imgurl: "./assets/chennai/bravo.jpg", type: "Batting Allrounder • Windies", price: "6.40 Crore", icon: "fa fa-plane" },
            { player: "Sam Billings", imgurl: "./assets/chennai/sam.jpg", type: "WK-Batsman • England", price: "1.00 Crore", icon: "fa fa-plane" },
            { player: "Mark Wood", imgurl: "./assets/chennai/wood.jpg", type: "Bowler • England", price: "1.50 Crore", icon: "fa fa-plane" },
            { player: "Imran Tahir", imgurl: "./assets/chennai/tahir.jpg", type: "Bowler • South Africa", price: "1.00 Crore", icon: "fa fa-plane" },
            { player: "Mitchell Santner", imgurl: "./assets/chennai/satner.jpg", type: "Bowling Allrounder • New Zealand", price: "50.00 Lakh", icon: "fa fa-plane" },
            { player: "Lungisani Ngidi", imgurl: "./assets/chennai/lungi.jpg", type: "Bowler • South Africa", price: "50.00 Lakh", icon: "fa fa-plane" }
        ];
        this.mumbai = [
            { player: "Rohit Sharma", imgurl: "./assets/mumbai/rohit.jpg", type: "Batsman", price: "Retained" },
            { player: "Krunal Pandya", imgurl: "./assets/mumbai/krunal.jpg", type: "Batting Allrounder", price: "8.80 Crore" },
            { player: "Hardik Pandya", imgurl: "./assets/mumbai/hardik.jpg", type: "Bowling Allrounder", price: "Retained" },
            { player: "Ishan Kishan", imgurl: "./assets/mumbai/kishan.jpg", type: "WK-Batsman", price: "6.20 Crore" },
            { player: "Suryakumar Yadav", imgurl: "./assets/mumbai/yadav.jpg", type: "Batsman", price: "3.20 Crore" },
            { player: "Saurabh Tiwary", imgurl: "./assets/mumbai/tiwary.jpg", type: "Batsman", price: "80.00 Lakh" },
            { player: "Jasprit Bumrah", imgurl: "./assets/mumbai/bumrah.jpg", type: "Bowler", price: "Retained" },
            { player: "Pradeep Sangwan", imgurl: "./assets/mumbai/pradeep.jpg", type: "Bowler", price: "1.50 Crore" },
            { player: "Rahul Chahar", imgurl: "./assets/mumbai/rahul.jpg", type: "Bowler", price: "1.90 Crore" },
            { player: "Aditya Tare", imgurl: "./assets/mumbai/aditya.jpg", type: "WK-Batsman", price: "20.00 Lakh" },
            { player: "A Sudhakar Roy", imgurl: "./assets/mumbai/anu.jpg", type: "Batting Allrounder", price: "20.00 Lakh" },
            { player: "Evin Lewis", imgurl: "./assets/mumbai/lewis.jpg", type: "Batsman • Windies", price: "3.80 Crore", icon: "fa fa-plane" },
            { player: "Kieron Pollard", imgurl: "./assets/mumbai/pollard.jpg", type: "Batting Allrounder • Windies", price: "5.40 Crore", icon: "fa fa-plane" },
            { player: "JP Duminy", imgurl: "./assets/mumbai/duminy.jpg", type: "Batting Allrounder • South Africa", price: "1.00 Crore", icon: "fa fa-plane" },
            { player: "Pat Cummins", imgurl: "./assets/mumbai/pat.jpg", type: "Bowler • Australia", price: "5.40 Crore", icon: "fa fa-plane" },
            { player: "Ben Cutting", imgurl: "./assets/mumbai/ben.jpg", type: "Bowling Allrounder • Australia", price: "2.20 Crore", icon: "fa fa-plane" },
            { player: "M Rahman", imgurl: "./assets/mumbai/rahman.jpg", type: "Bowler • Bangladesh", price: "2.20 Crore", icon: "fa fa-plane" },
            { player: "J Behrendorff", imgurl: "./assets/mumbai/jason.jpg", type: "Bowler • Australia", price: "1.50 Crore", icon: "fa fa-plane" },
            { player: "Akila Dananjaya", imgurl: "./assets/mumbai/akila.jpg", type: "Bowler • Sri Lanka", price: "50.00 Lakh", icon: "fa fa-plane" }
        ];
    }
    TeamService.prototype.getChennaai = function () {
        return this.chennai;
    };
    TeamService.prototype.getMumbai = function () {
        return this.mumbai;
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\r\n    margin: 100px auto;\r\n    width: 50px;\r\n    height: 40px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  .spinner > div {\r\n    background-color:#fff;\r\n    height: 100%;\r\n    width: 6px;\r\n    display: inline-block;\r\n    \r\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n  }\r\n  \r\n  .spinner .rect2 {\r\n    -webkit-animation-delay: -1.1s;\r\n    animation-delay: -1.1s;\r\n  }\r\n  \r\n  .spinner .rect3 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  .spinner .rect4 {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n  }\r\n  \r\n  .spinner .rect5 {\r\n    -webkit-animation-delay: -0.8s;\r\n    animation-delay: -0.8s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-stretchdelay {\r\n    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \r\n    20% { -webkit-transform: scaleY(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-stretchdelay {\r\n    0%, 40%, 100% { \r\n      transform: scaleY(0.4);\r\n      -webkit-transform: scaleY(0.4);\r\n    }  20% { \r\n      transform: scaleY(1.0);\r\n      -webkit-transform: scaleY(1.0);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__("../../../../../src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/teams/chennai/chennai.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n   \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teams/chennai/chennai.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n    \n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      </ul>\n    \n      <!-- The slideshow -->\n      <div class=\"carousel-inner text-center\">\n        <div class=\"carousel-item active\">\n          <img src=\"./assets/ccover.jpg\" class=\"img-fluid\" alt=\"Los Angeles\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/ccover2.jpg\" class=\"img-fluid\" alt=\"Chicago\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/ccover3.jpg\" class=\"img-fluid\" alt=\"New York\">\n        </div>\n      </div>\n    \n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    \n    </div><br>\n\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let team of chennai\">\n            \n            <div class=\"card\" style=\"width: 18rem;\">\n                \n                <img class=\"card-img-top img-thumbnail\" src=\"{{team.imgurl}}\" alt=\"Card image cap\">\n              \n                <div class=\"card-body\">\n                 <h3><i [class]=\"team.icon\" style=\"color:#A62BF5\"></i> {{team.player}}</h3><p class=\"card-text\">{{team.type}}</p>\n                  <i class=\"fa fa-inr pull-left\" style=\"font-size:30px;\"></i><h4 class=\"pull-left\" style=\"background-color: rgb(255, 229, 80); border-radius:5px;\" >{{team.price}}</h4>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/teams/chennai/chennai.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChennaiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_team_service__ = __webpack_require__("../../../../../src/app/service/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChennaiComponent = /** @class */ (function () {
    function ChennaiComponent(teamsvs) {
        this.teamsvs = teamsvs;
        this.chennai = this.teamsvs.getChennaai();
    }
    ChennaiComponent.prototype.ngOnInit = function () {
    };
    ChennaiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chennai',
            template: __webpack_require__("../../../../../src/app/teams/chennai/chennai.component.html"),
            styles: [__webpack_require__("../../../../../src/app/teams/chennai/chennai.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_team_service__["a" /* TeamService */]])
    ], ChennaiComponent);
    return ChennaiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/teams/mumbai/mumbai.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n   \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teams/mumbai/mumbai.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n    \n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      </ul>\n    \n      <!-- The slideshow -->\n      <div class=\"carousel-inner text-center\">\n        <div class=\"carousel-item active\">\n          <img src=\"./assets/mcover3.jpg\" class=\"img-fluid\" alt=\"Los Angeles\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/mcover.jpg\" class=\"img-fluid\" alt=\"Chicago\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/mcover2.jpg\" class=\"img-fluid\" alt=\"New York\">\n        </div>\n      </div>\n    \n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    \n    </div><br>\n\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6\" *ngFor=\"let team of mumbai\">\n            \n            <div class=\"card\" style=\"width: 18rem;\">\n                \n                <img class=\"card-img-top img-thumbnail\" src=\"{{team.imgurl}}\" alt=\"Card image cap\">\n              \n                <div class=\"card-body\">\n                 <h3><i [class]=\"team.icon\" style=\"color:#A62BF5\"></i> {{team.player}}</h3><p class=\"card-text\">{{team.type}}</p>\n                  <i class=\"fa fa-inr pull-left\" style=\"font-size:30px;\"></i><h4 class=\"pull-left\" style=\"background-color: rgb(255, 229, 80); border-radius:5px;\" >{{team.price}}</h4>\n                </div>\n            </div>\n        </div>\n      </div>\n      <button class=\"btn btn-primary pull-right\" (click)=\"redi()\">Go To Top</button>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/teams/mumbai/mumbai.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MumbaiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_team_service__ = __webpack_require__("../../../../../src/app/service/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MumbaiComponent = /** @class */ (function () {
    function MumbaiComponent(teamsvs) {
        this.teamsvs = teamsvs;
        this.mumbai = this.teamsvs.getMumbai();
    }
    MumbaiComponent.prototype.ngOnInit = function () {
    };
    MumbaiComponent.prototype.redi = function () {
        window.scrollTo(0, 0);
    };
    MumbaiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mumbai',
            template: __webpack_require__("../../../../../src/app/teams/mumbai/mumbai.component.html"),
            styles: [__webpack_require__("../../../../../src/app/teams/mumbai/mumbai.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_team_service__["a" /* TeamService */]])
    ], MumbaiComponent);
    return MumbaiComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map