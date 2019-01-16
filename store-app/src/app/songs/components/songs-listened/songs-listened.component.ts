import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'songs-listened',
  templateUrl: './songs-listened.component.html'
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) { }

  ngOnInit() {
    this.listened$ = this.store.select('playlist')
      .pipe(
          // used to check if something is in the playlist
          filter(Boolean),
          map( playlist => playlist.filter(song => song.listened))
      );
  }

}
