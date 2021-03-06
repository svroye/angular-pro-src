import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsService } from './services/songs.service';
import { SongsListComponent } from './components/songs-list/songs-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SongsFavouritesComponent, 
    SongsListenedComponent, 
    SongsPlaylistComponent,
    SongsListComponent
  ],
  exports: [
    SongsFavouritesComponent, 
    SongsListenedComponent, 
    SongsPlaylistComponent
  ],
  providers: [
    SongsService
  ]
})
export class SongsModule { }
