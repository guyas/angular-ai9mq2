import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-audio2-element',
  templateUrl: './audio2-element.component.html',
  styleUrls: ['./audio2-element.component.scss']
})
export class Audio2ElementComponent implements OnInit, OnDestroy {

  constructor() { }
  @Input() audio_path;

  element: any;
  audioObj: any;
  ngOnInit(): void {
    this.audioObj = new Audio();
    this.audioObj.src = `app/media/${this.audio_path}`;
    this.audioObj.load();

  }

  ngOnDestroy() {
    if (this.audioObj) {
      this.audioObj.pause();
      this.audioObj = null;
    }
  }

}
