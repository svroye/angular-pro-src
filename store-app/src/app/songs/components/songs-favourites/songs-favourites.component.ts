import { filter, map } from 'rxjs/operators';
import { SongsService } from './../../services/songs.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'songs-favourites',
  templateUrl: './songs-favourites.component.html'
})
export class SongsFavouritesComponent implements OnInit {

  favourites$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) { }

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
      .pipe(
          // used to check if something is in the playlist
          filter(Boolean),
          map( playlist => playlist.filter(song => song.favourite))
      );
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }

}
