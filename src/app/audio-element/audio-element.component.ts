import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.scss']
})
export class AudioElementComponent implements OnInit, OnDestroy {

  constructor() { }
  @Input() audio_src;

  audioObj: any;
  ngOnInit(): void {
    console.log('hello');
    this.audioObj = new Audio();
    this.audioObj.src = `app/media/${this.audio_src}`;
    this.audioObj.load();

  }

  ngOnDestroy() {
    if (this.audioObj) {
      this.audioObj.pause();
      this.audioObj = null;
    }
  }

}
