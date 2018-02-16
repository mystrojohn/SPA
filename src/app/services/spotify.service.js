"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
        this.client_id = "fe96ca67af114d9fa7219d324d651355";
        this.client_secret = "1a4e5f02687b4251ae22f2ef93445018";
        this.OAuth = "BQC7_2WBYLKknevSrecpkQpM5pengpF029xyQD7tVtfHW9aUzcyz8UFVhxhdfWfdws5ngdDlTgr5C8RF6nnsaRvQ8QxoOH1nSNhBQc5zVF7od2P_5BayW255zg97ktyeY_rhs2u2vrMmrO2GxTr2jeRFKkTMN3t8DOqIMlztvmYEG69GRueq4eC-YQ";
        this.encoded = btoa(this.client_id + ':' + this.client_secret);
        this.base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';
    }
    SpotifyService.prototype.getToken = function () {
        // let params : URLSearchParams = new URLSearchParams();
        // params.set('grant_type' , 'client_credentials');
        // let body = params.toString();
        var params = ('grant_type=client_credentials');
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic ' + this.encoded);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('https://accounts.spotify.com/api/token', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.searchMusic = function (str, type, token) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.searchUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (id, token) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.artistUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (artistId, token) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums/';
        console.log("Token = " + token);
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.albumsUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (id, token) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.albumUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map