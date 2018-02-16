import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {AlbumComponent} from './components/album/album.component';
import {ArtistComponent} from './components/artist/artist.component';
import {SpotifyService} from './services/spotify.service';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  SearchComponent,
                  AboutComponent,
                  AlbumComponent,
                  ArtistComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SpotifyService]
})
export class AppModule { }
