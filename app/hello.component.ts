import {Component, Input} from '@angular/core';
import {VgAPI} from 'videogular2/core';
@Component({
  selector: 'hello',
  template: `<vg-player (onPlayerReady)="onPlayerReady($event)">
    <vg-overlay-play></vg-overlay-play>
    <vg-buffering></vg-buffering>

    <vg-controls>
        <vg-play-pause></vg-play-pause>
        <vg-playback-button></vg-playback-button>

        <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>

        <vg-scrub-bar>
            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
        </vg-scrub-bar>

        <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>
        <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>

        <vg-track-selector></vg-track-selector>
        <vg-mute></vg-mute>
        <vg-volume></vg-volume>

        <vg-fullscreen></vg-fullscreen>
    </vg-controls>
<video [vgMedia]="media" #media id="singleVideo" preload="auto" crossorigin>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </video>
</vg-player>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
      api:VgAPI;
  @Input() name: string;
  onPlayerReady(api:VgAPI) {
        this.api = api;
    }
}
