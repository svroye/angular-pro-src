import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';

@Component({
  selector: 'songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.css']
})
export class SongsPlaylistComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
