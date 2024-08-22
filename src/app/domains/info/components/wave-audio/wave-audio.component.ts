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

  @Input({required: true}) audioUrl:string = '';
  @ViewChild('wave') container!: ElementRef;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log("se renderizó el componente");

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("se ejecuta el ngOnChanges porque se renderiza");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
  }

}

