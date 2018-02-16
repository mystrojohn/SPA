import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService{
    client_id = "fe96ca67af114d9fa7219d324d651355";
    client_secret = "1a4e5f02687b4251ae22f2ef93445018";
    OAuth = "BQC7_2WBYLKknevSrecpkQpM5pengpF029xyQD7tVtfHW9aUzcyz8UFVhxhdfWfdws5ngdDlTgr5C8RF6nnsaRvQ8QxoOH1nSNhBQc5zVF7od2P_5BayW255zg97ktyeY_rhs2u2vrMmrO2GxTr2jeRFKkTMN3t8DOqIMlztvmYEG69GRueq4eC-YQ";
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    private accessToken: any;
    private tokenType: string;
    
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';
    
    
    constructor(private _http:Http){
        
    }

    getToken(){
        // let params : URLSearchParams = new URLSearchParams();
        // params.set('grant_type' , 'client_credentials');
        // let body = params.toString();
         var params = ('grant_type=client_credentials');
 
         var headers = new Headers();
         headers.append( 'Authorization', 'Basic ' + this.encoded);
        
         headers.append('Content-Type' , 'application/x-www-form-urlencoded');
 
         return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
         .map(res=> res.json());
      }
 
    
    searchMusic(str:string, type='artist', token:string){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;

        let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + token);

        return this._http.get(this.searchUrl , {headers : headers})
            .map(res => res.json());
    }
    
    getArtist(id:string, token:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;

        let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + token);

        return this._http.get(this.artistUrl, {headers : headers})
            .map(res => res.json());
    }
    
    getAlbums(artistId:string, token:string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums/';
        console.log("Token = " + token);
        let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + token);

        return this._http.get(this.albumsUrl, {headers : headers})
            .map(res => res.json());
    }
    
    getAlbum(id:string, token:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;

        let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + token);

        return this._http.get(this.albumUrl, {headers : headers})
            .map(res => res.json());
    }
}