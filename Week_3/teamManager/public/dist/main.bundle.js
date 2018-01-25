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

/***/ "../../../../../src/app/add-player/add-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-player/add-player.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n    <a [routerLink]=\"['/players','list']\">List</a>\n    <a [routerLink]=\"['/players','addplayer']\">Add Player</a>\n    <form (submit)=\"onSubmit()\" #playerForm=\"ngForm\">\n      <h2>Add Player</h2>\n      <table>\n        <tr>\n          <td>Player Name:</td>\n          <td><input type=\"text\" name=\"name\" [(ngModel)]=\"newPlayer.name\" #name='ngModel'></td>\n        </tr>\n        <tr>\n          <td>Preferred Position:</td>\n          <td><input type=\"text\" name=\"position\" [(ngModel)]=\"newPlayer.position\" #position='ngModel'></td>\n        </tr>\n        <tr>\n          <td><input type=\"submit\" value=\"Add Player\"></td>\n        </tr>\n      </table>\n    </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/add-player/add-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
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



var AddPlayerComponent = (function () {
    function AddPlayerComponent(_managementService, _router) {
        this._managementService = _managementService;
        this._router = _router;
        this.newPlayer = { name: '', position: '' };
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
    };
    AddPlayerComponent.prototype.onSubmit = function () {
        console.log('hit submit, new player: ', this.newPlayer);
        this._managementService.addPlayer(this.newPlayer);
        this.newPlayer = { name: '', position: '' };
        this._router.navigate(['players', 'list']);
    };
    AddPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-player',
            template: __webpack_require__("../../../../../src/app/add-player/add-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-player/add-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__management_service__["a" /* ManagementService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_add_player_component__ = __webpack_require__("../../../../../src/app/add-player/add-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_list_player_list_component__ = __webpack_require__("../../../../../src/app/player-list/player-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__games_games_component__ = __webpack_require__("../../../../../src/app/games/games.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'players/list',
        pathMatch: 'full'
    },
    {
        path: 'players/list',
        component: __WEBPACK_IMPORTED_MODULE_3__player_list_player_list_component__["a" /* PlayerListComponent */]
    },
    {
        path: 'players/addplayer',
        component: __WEBPACK_IMPORTED_MODULE_2__add_player_add_player_component__["a" /* AddPlayerComponent */]
    },
    {
        path: 'status/game/1',
        component: __WEBPACK_IMPORTED_MODULE_4__games_games_component__["a" /* GamesComponent */]
    },
    {
        path: 'status/game/2',
        component: __WEBPACK_IMPORTED_MODULE_4__games_games_component__["a" /* GamesComponent */]
    },
    {
        path: 'status/game/3',
        component: __WEBPACK_IMPORTED_MODULE_4__games_games_component__["a" /* GamesComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<a [routerLink]=\"['/players','list']\">Manage Players</a>\n<a [routerLink]=\"['/status','game','1']\">Manage Player Status</a>\n\n<router-outlet></router-outlet>"

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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_list_player_list_component__ = __webpack_require__("../../../../../src/app/player-list/player-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_player_add_player_component__ = __webpack_require__("../../../../../src/app/add-player/add-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__games_games_component__ = __webpack_require__("../../../../../src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__player_list_player_list_component__["a" /* PlayerListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__add_player_add_player_component__["a" /* AddPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__games_games_component__["a" /* GamesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__management_service__["a" /* ManagementService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/games/games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".undecided {\n    background-color: yellow;\n}\n.notplaying {\n    background-color: red;\n}\n.playing {\n    background-color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <h1>Player Status Game 1\n    <a href=\"javacript:void(0)\" (click)=\"pickGame('game1')\">Game 1</a>\n    <a href=\"javacript:void(0)\" (click)=\"pickGame('game2')\">Game 2</a>\n    <a href=\"javacript:void(0)\" (click)=\"pickGame('game3')\">Game 3</a>\n    <table>\n      <tr>\n        <th>Player</th>\n        <th>Actions</th>\n      </tr>\n        <div *ngIf=\"gameNumber == 'game1'\">\n          <tr *ngFor=\"let player of players\">\n            <td>{{ player.name }}</td>\n            <td>\n              <button (click)=\"pushedPlaying(player._id,'playing','game1Status')\" [ngClass]=\"{'playing':player.game1Status==='playing'}\">Playing</button>\n              <button (click)=\"pushedPlaying(player._id,'notplaying','game1Status')\"[ngClass]=\"{'notplaying':player.game1Status==='notplaying'}\">Not Playing</button>\n              <button (click)=\"pushedPlaying(player._id,'undecided','game1Status')\"[ngClass]=\"{'undecided':player.game1Status==='undecided'}\">Undecided</button>\n            </td>\n          </tr>\n        </div>\n        <div *ngIf=\"gameNumber == 'game2'\">\n          <tr *ngFor=\"let player of players\">\n            <td>{{ player.name }}</td>\n            <td>\n              <button (click)=\"pushedPlaying(player._id,'playing','game2Status')\" [ngClass]=\"{'playing':player.game2Status==='playing'}\">Playing</button>\n              <button (click)=\"pushedPlaying(player._id,'notplaying','game2Status')\"[ngClass]=\"{'notplaying':player.game2Status==='notplaying'}\">Not Playing</button>\n              <button (click)=\"pushedPlaying(player._id,'undecided','game2Status')\"[ngClass]=\"{'undecided':player.game2Status==='undecided'}\">Undecided</button>\n            </td>\n          </tr>\n        </div>\n        <div *ngIf=\"gameNumber == 'game3'\">\n          <tr *ngFor=\"let player of players\">\n            <td>{{ player.name }}</td>\n            <td>\n              <button (click)=\"pushedPlaying(player._id,'playing','game3Status')\" [ngClass]=\"{'playing':player.game3Status==='playing'}\">Playing</button>\n              <button (click)=\"pushedPlaying(player._id,'notplaying','game3Status')\"[ngClass]=\"{'notplaying':player.game3Status==='notplaying'}\">Not Playing</button>\n              <button (click)=\"pushedPlaying(player._id,'undecided','game3Status')\"[ngClass]=\"{'undecided':player.game3Status==='undecided'}\">Undecided</button>\n            </td>\n          </tr>\n        </div>\n    </table>\n  </h1>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesComponent = (function () {
    function GamesComponent(_managementService) {
        this._managementService = _managementService;
        this.players = [];
        this.gameNumber = "game1";
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._managementService.playersSubject.subscribe(function (playersData) {
            _this.players = playersData;
        });
        this._managementService.getPlayers();
    };
    GamesComponent.prototype.pushedPlaying = function (player_id, status, num) {
        console.log('Player Status, ', status);
        this._managementService.editStatus(player_id, status, num);
        this._managementService.getPlayers();
    };
    GamesComponent.prototype.pickGame = function (numb) {
        this.gameNumber = numb;
        console.log('game number: ', numb);
    };
    GamesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-games',
            template: __webpack_require__("../../../../../src/app/games/games.component.html"),
            styles: [__webpack_require__("../../../../../src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__management_service__["a" /* ManagementService */]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagementService = (function () {
    function ManagementService(_http) {
        this._http = _http;
        this.playersSubject = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["BehaviorSubject"]([]);
    }
    ManagementService.prototype.addPlayer = function (player) {
        var _this = this;
        this._http.post('/createplayer', player).subscribe(function (response) {
            console.log('add player got a response from the server: ', response);
            _this.getPlayers();
        });
    };
    ManagementService.prototype.getPlayers = function () {
        var _this = this;
        this._http.get('/getplayers').subscribe(function (response) {
            console.log('got a response from the server: ', response);
            _this.playersSubject.next(response);
        });
    };
    ManagementService.prototype.deletePlayer = function (player) {
        var _this = this;
        this._http.post('/deleteplayer/' + player, player).subscribe(function (response) {
            console.log('got a response from the server: ', response);
            _this.getPlayers();
        });
    };
    ManagementService.prototype.editStatus = function (id, status, game) {
        var _this = this;
        console.log('hit edit status in services');
        this._http.post('/updateplayer/' + id + '/' + status + '/' + game, id).subscribe(function (response) {
            console.log('editStatus() got a response from the server: ', response);
            _this.getPlayers();
        });
    };
    ManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ManagementService);
    return ManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/player-list/player-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th, td {\n    border: 1px solid black;\n }\n\nth {\n    width: 275px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <a href=\"\">List</a>\n  <a [routerLink]=\"['/players','addplayer']\">Add Player</a>\n  <table>\n    <tr>\n      <th>Player Name</th>\n      <th>Prefered Position</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let player of players\">\n      <td>{{ player.name }}</td>\n      <td>{{ player.position }}</td>\n      <td><button (click)=\"onDelete(player._id)\">Delete</button></td>\n    </tr>\n  </table>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/player-list/player-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerListComponent = (function () {
    function PlayerListComponent(_managementService) {
        this._managementService = _managementService;
        this.players = [];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._managementService.playersSubject.subscribe(function (playersData) {
            _this.players = playersData;
        });
        this._managementService.getPlayers();
    };
    PlayerListComponent.prototype.onDelete = function (player) {
        console.log('the player id is: ', player);
        this._managementService.deletePlayer(player);
        this._managementService.getPlayers();
    };
    PlayerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-list',
            template: __webpack_require__("../../../../../src/app/player-list/player-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__management_service__["a" /* ManagementService */]])
    ], PlayerListComponent);
    return PlayerListComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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