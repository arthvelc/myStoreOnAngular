import { Component, Input, ViewChild, ElementRef, AfterViewInit, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';


@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
})
export class WaveAudioComponent implements AfterViewInit {
  @Input({required: true}) url!: string;
  @ViewChild('wave', { static: false }) wave!: ElementRef;
  private ws!: WaveSurfer;
  isplaying = signal(false);

  wavesurfer!: WaveSurfer;

  ngAfterViewInit(): void {
    if (this.wave && this.wave.nativeElement) {
      this.wavesurfer = WaveSurfer.create({
        container: this.wave.nativeElement,
        waveColor: 'violet',
        progressColor: 'purple'
      });

      // Cargar el archivo de audio una vez que WaveSurfer esté inicializado
      this.wavesurfer.load(this.url);

      // Escuchar eventos de reproducción y pausa
      this.wavesurfer.on('play', () => {
        this.isplaying.set(true);  // Establece estado a true cuando se reproduce
      });

      this.wavesurfer.on('pause', () => {
        this.isplaying.set(false);  // Establece estado a false cuando se pausa
      });
    } else {
      console.error('Elemento de WaveSurfer no encontrado.');
    }
  }

  playPause(): void {
    this.wavesurfer.playPause();
  }
}
