/**
 * The CounterComponent class represents a component that displays a counter.
 * It accepts two input properties: duration and message.
 * The duration property represents the duration of the counter.
 * The message property represents the message to be displayed along with the counter.
 * 
 * @remarks
 * This component is used to display a counter and handle changes to its input properties.
 * It also provides a lifecycle hook ngOnInit() for component initialization.
 * 
 * @example
 * ```html
 * <app-counter [duration]="10" [message]="'Counter Component'"></app-counter>
 * ```
 * 
 * @public
 */
import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    console.log('CounterComponent ha sido creado');
    console.log('-->'.repeat(20));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('El componente CounterComponent ha cambiado');
    console.log(changes);
    console.log('-->'.repeat(20));
  }

  // ngOnInit sirve para inicializar el componente y se ejecuta una sola vez después del constructor, aqui se pueden hacer peticiones http y suscribirse a eventos
  ngOnInit(): void {
    console.log('El componente CounterComponent ha sido creado');
    console.log('-->'.repeat(20));
    console.log('El valor de duration es:', this.duration);
    console.log('El valor de message es:', this.message);
  }

  // ngAfterViewInit se ejecuta cuando los hijos de ese componente ya fueron renderizados
  ngAfterViewInit(): void {
    console.log('El componente CounterComponent ha sido inicializado');
    console.log('-->'.repeat(20));
  }

  // ngOnDestroy se ejecuta cuando el componente es destruido
  ngOnDestroy(): void {
    console.log('El componente CounterComponent ha sido destruido');
    console.log('-->'.repeat(20));
  }
}
