import { Component, ElementRef, Input, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


import WaveSurfer from 'wavesurfer.js'


@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [ ],
  templateUrl: './wave-audio.component.html',
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl= '';
  @ViewChild('wave') container!: ElementRef;


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("afterViewInit.")

    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
  }

}

