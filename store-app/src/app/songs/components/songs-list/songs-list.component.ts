import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { Song } from "../../services/songs.service";



@Component({
    selector: 'songs-list',
    styleUrls: ['songs-list.component.scss'],
    templateUrl: 'songs-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongsListComponent {
    
    @Input()
    list: Song[];
    
    @Output()
    toggle = new EventEmitter<any>();

    toggleItem(index: number, prop: string) {
        const track = this.list[index];
        this.toggle.emit({
            track: {...track, [prop]: !track[prop] }
        });
    }
}