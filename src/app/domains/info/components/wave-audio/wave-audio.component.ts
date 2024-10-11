import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
})
export class WaveAudioComponent {
  @Input() url!: string;
  @ViewChild('wave') wave!: ElementRef;



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const wavesurfer = WaveSurfer.create({
      url: 'https://wavesurfer-js.org/example/media/demo.wav',
      container: this.wave.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple'
    });
  }

}
